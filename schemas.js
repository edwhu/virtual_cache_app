const mongoose = require('mongoose');
const GeoJSON = require('mongoose-geojson-schema');

let deviceSchema = mongoose.Schema({
	name: String,
	cache:[{name:String,id:String, length:String, duration:String,
		battery:String, dataQuality:String, wifiQuality:String}],
	d2d:0,
	time:String,
	loc:mongoose.Schema.Types.Point
	// loc: {
	// 	type: [Number],	// [<longitude>, <latitude>]
	// 	index: '2d',			// create the geospatial index
	// }
});

module.exports.deviceSchema = deviceSchema;
