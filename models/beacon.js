var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var beaconSchema = new Schema({
	uuid: String,
	name: String,
	info: String,
	major: String,
	minor: String
},{ versionKey: false });

Beacon = mongoose.model('Beacon',beaconSchema,'beacon');