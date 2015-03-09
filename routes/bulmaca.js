var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

router.get('/list', function(req, res) {
  var query = Bulmaca.find({}).select('-_id');
  query.exec(function (err,bulmaca){
  	if (err) return handleError(err);
  	res.send(bulmaca);
  });
});


router.get('/', function(req, res) {

  var soru = req.query.Soru;
  var cevap = req.query.Cevap;

  if( soru === undefined || cevap === undefined){
    res.status(400).send("0");
  }else{
    var data = {

            "Soru": req.query.Soru,
            "Cevap": req.query.Cevap

    }; 

    var obj = new Bulmaca(data);
    obj.save(function (err) {
      if (err) return handleError(err);
      res.status(200).send("1");
    });

  }

  
  
});

router.post('/add', function(req, res) {

  var soru = req.body.Soru;
  var cevap = req.body.Cevap;

  if( soru === undefined || cevap === undefined){
    res.status(400).send("0");
  }else{
      var obj = new Bulmaca(req.body);
      obj.save(function (err) {
        if (err) return handleError(err);
        res.status(200).send("1");
    });
  }

});


module.exports = router;