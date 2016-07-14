const mongoose = require('mongoose');
const GeoJSON = require('mongoose-geojson-schema');
const locationSchema = mongoose.Schema({
	type:'Point',
	coordinates:[Number]
});
const deviceSchema = mongoose.Schema({
	name: String,
	cache:[{name:String,id:String, length:String, duration:String,
		battery:String, dataQuality:String, wifiQuality:String}],
	d2d:0,
	time:String,
	loc: {
		type: [Number],	// [<longitude>, <latitude>]
		index: '2d'			// create the geospatial index
	}
});
module.exports.locationSchema = locationSchema;
module.exports.deviceSchema = deviceSchema;
