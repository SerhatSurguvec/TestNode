var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();


	router.get('/', function(req, res) {
	  Users.find(function(err, users) {
	    res.send(users);
	  });
  
});

module.exports = router;