const mongoose = require('mongoose');
const locationSchema = mongoose.Schema({
	type:'Point',
	coordinates:[Number]
});
const deviceSchema = mongoose.Schema({
	name: String,
	cache:[{name:String, length:String, duration:String}],
	d2d:0,
	time:Number,
	loc: {
		type: [Number],	// [<longitude>, <latitude>]
		index: '2d'			// create the geospatial index
	}
});
module.exports.locationSchema = locationSchema;
module.exports.deviceSchema = deviceSchema;
