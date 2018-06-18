var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var beaconDataSchema = new Schema({
	name: String,
	timestamp: String,
	value: String
});

BeaconData = mongoose.model('BeaconData',beaconDataSchema,'beaconData');