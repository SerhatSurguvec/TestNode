var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var beaconSchema = new Schema({
	mac_address: String,
	name: String,
	info: String
},{ versionKey: false });

Beacon = mongoose.model('Beacon',beaconSchema,'beacon');