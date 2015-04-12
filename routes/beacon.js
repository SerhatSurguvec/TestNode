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

router.post('/add', function(req, res) {

    var obj = new Beacon(req.body);

    obj.save(function (err) {
    if (err) res.send("0");
      res.send("1");
    });


});

router.post('/get', function(req, res) {
    var query = Beacon.findOne({ uuid: req.body.uuid , major: req.body.major  , minor: req.body.minor }).select('-_id');
      query.exec(function (err,beacon){
        if (err) res.send("0");

        if(beacon != null){
          res.send(beacon);
        }else{
          res.send("0");
        }
        
      });
    }   
);


module.exports = router;