var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var usersSchema = new Schema({
	name: String
},{ versionKey: false });


Users = mongoose.model('Users',usersSchema,'users');