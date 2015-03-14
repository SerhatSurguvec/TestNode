var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

router.get('/list', function(req, res) {
  var query = Beacon.find({}).select('-_id');
  query.exec(function (err,beacon){
  	if (err) res.send("0");
  	res.send(beacon);
  });
});

router.get('/:MacAddress', function(req, res) {

  if(require('getmac').isMac(req.params.MacAddress)){
      var query = Beacon.find({ mac_address: req.params.MacAddress}).select('-_id');
      query.exec(function (err,beacon){
        if (err) res.send("0");
        res.send(beacon);
      });
    }
  });

router.post('/add', function(req, res) {

    var mac_address = req.body.mac_address;
    var name = req.body.name;
    var info = req.body.info;

    if ( require('getmac').isMac(mac_address) ) {
      var obj = new Beacon(req.body);
        obj.save(function (err) {
          if (err) res.send("0");
          res.send("1");
        });
    } else{
      res.send("0");
    }   
});


module.exports = router;