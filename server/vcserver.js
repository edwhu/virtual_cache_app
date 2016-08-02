#!/usr/bin/env nodejs
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const youtubedl = require('youtube-dl');
const MongoClient = require('mongodb').MongoClient;
const passport = require('passport');
const YoutubeV3Strategy = require('passport-youtube-v3').Strategy;
const Promise = require('bluebird');
const isDeveloping = process.env.NODE_ENV !== 'production';
//const MONGO_URL = 'mongodb://localhost:27017/virtualcache';
const ENV = require('../env.js');
const MONGO_URL = ENV.MONGO_URL;
const VIDEO = 'sunset.mp4';
const FILESIZE = fs.statSync(VIDEO).size;

//middleware
app.use(express.static(path.join(__dirname, '/../public')));
//app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());
if(isDeveloping){
	console.log('Development mode');
	app.use(function (req, res, next) {
		// Website you wish to allow to connect
		res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
		// Request methods you wish to allow
		res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
		// Request headers you wish to allow
		res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
		// Set to true if you need the website to include cookies in the requests sent
		// to the API (e.g. in case you use sessions)
		res.setHeader('Access-Control-Allow-Credentials', true);
		// Pass to next layer of middleware
		next();
	});
}

const clientID = ENV.YOUTUBE_APP_ID;
const clientSecret = ENV.YOUTUBE_APP_SECRET;
const callbackURL = ENV.CALLBACKURL;
passport.use('youtube',new YoutubeV3Strategy({
	clientID,
	clientSecret,
	callbackURL,
	scope: ['https://www.googleapis.com/auth/youtube.readonly']
},
function(accessToken, refreshToken, profile, done) {
	console.log('got authentication for', profile);
	return done(err, user);
}
));
app.use(passport.initialize());

//Server Startup
let virtual_cache;
MongoClient.connect(MONGO_URL, (err, database) => {
	if(err) throw err;
	virtual_cache = database;
	//Server Startup
	app.listen(process.env.PORT || 3000,'0.0.0.0',() => {
		console.log(`Example app listening on port ${process.env.PORT || 3000}!`);
	});
});

//ROUTES
app.get('/db', function (req, res) {
	console.log('/db requested');
	virtual_cache.collection('devices').find().toArray()
	.then(array => res.status(201).send(array))
	.catch(err => res.status(500).send(err));
});

//Json version of logs
app.post('/logs', (req, res) => {
	const devices = virtual_cache.collection('devices');
	const device = Object.assign({}, req.body, {loc:{type:'Point', coordinates:req.body.loc}});
	devices.findOneAndUpdate({name:req.body.name}, device, {upsert:true});
	devices.createIndex({loc:'2dsphere'});
	devices.createIndex({cache:1});
	res.status(201).end();
});

//youtube authentication logs
app.post('/auth', passport.authenticate('youtube'), (req, res) => {
	console.log('authenticated');
});

//GeoNear features
app.post('/locsearch', (req,res) => {
	// [long, lat]
	console.log('locsearch', req.body);
	const center =	req.body.center.coordinates || [0,0];
	//meters
	const maxDistance = req.body.radius;
	console.log(center, maxDistance);
	const device = virtual_cache.collection('devices');
	const query = {
		loc:{
			$near:{
				$geometry:{
					type:'Point',
					coordinates:center
				},
				$maxDistance:maxDistance
			}
		}
	};
	device.find(query).toArray()
	.then(results => res.status(201).send(results))
	.catch(err => {
		res.status(500).end();
		console.error(err);
	});
});

//erase DB contents
app.get('/erase', (req,res) => {
	db.collection('devices').drop();
	res.status(200).redirect('/');
});

//download video file
let connections = new Map();
app.get('/test', (req, res) => {
	let currentDevice = req.headers['user-agent'];
	let time = Date.now();
	res.download(`./${VIDEO}`, VIDEO, err => {
		time = Date.now() - time;
		time/=1000;
		let ratio = (FILESIZE/1000000) / time;
		let now = new Date();
		connections.set(currentDevice, {date:`${now.getMonth()}:${now.getDate()}:${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`, filesize:FILESIZE,time:time,ratio:ratio});
	});
});

//get data
app.get('/cxn', (req, res) => {
	let string = '';
	connections.forEach((v,k)=>{
		let json = {key:k, value:v};
		string+=`${JSON.stringify(json,null, '\t')}`;
	});
	res.send(string);
});

//stream
app.get('/stream', (req, res) => {
	//stream youtube video
	const video = youtubedl('https://www.youtube.com/watch?v=YQHsXMglC9A',
	// Optional arguments passed to youtube-dl.
	['--format=18'],
	// Additional options can be given for calling `child_process.execFile()`.
	{ cwd: __dirname });
	// Will be called when the download starts.
	video.on('info', function(info) {
		console.log('Download started');
		console.log('filename: ' + info._filename);
		console.log('size: ' + info.size);
	});
	res.writeHead(200, {
		'Content-Length': 'unknown',
		'Content-Type': 'video/mp4'
	});
	video.pipe(fs.createWriteStream('myvideo.mp4'));
	video.pipe(res);
});

//csv
// app.get('/csv', (req, res) => {
// 	const currentDB_P = Device.find().exec()
// 	currentDB_P
// 	.then( arr => exportToCSV(arr, 'file.csv'))
// 	.then( stream => {
// 		res.writeHead(200, {
// 			"Content-Disposition": "attachment;filename=" + 'file.csv',
// 			'Content-Type':'text/csv'
// 		});
// 		stream.pipe(res);
// 	});
// });
