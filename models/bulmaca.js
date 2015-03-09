var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bulmacaSheme = new Schema({
	Soru: String,
	Cevap: String,
},{ versionKey: false  });

Bulmaca = mongoose.model('Bulmaca',bulmacaSheme,'Bulmaca');