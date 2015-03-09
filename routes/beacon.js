var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

router.get('/list', function(req, res) {
  var query = Beacon.find({}).select('-_id');
  query.exec(function (err,beacon){
  	if (err) return handleError(err);
  	res.send(beacon);
  });
});

router.get('/:MacAddress', function(req, res) {
  var query = Beacon.find({ mac_address: req.params.MacAddress}).select('-_id');
  query.exec(function (err,beacon){
  	if (err) return handleError(err);
  	res.send(beacon);
  });
});

router.post('/add', function(req, res) {

    var mac_address = req.body.mac_address;
    var name = req.body.name;
    var info = req.body.info;

    var obj = new Beacon(req.body);
    obj.save(function (err) {
  		if (err) return handleError(err);
  		res.send("inserted"+mac_address);
	})

});


module.exports = router;