var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

router.get('/list' ,function(req, res) {


  var query = Bulmaca.find({}).select('-_id');
  query.exec(function (err,bulmaca){
  	if (err) return handleError(err);

    // Website you wish to allow to connect
    //res.setHeader('Access-Control-Allow-Origin', 'http://fiddle.jshell.net');
    // Request methods you wish to allow
    //res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
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

router.get('/web', function(req, res) {

  var soru = req.query.Soru;
  var cevap = req.query.Cevap;


  if( soru === undefined || cevap === undefined){
      res.render('index',{
      title: "Add",
      content: ""
    });
    // res.status(400).send("0");
  }else{
    var data = {

            "Soru": req.query.Soru,
            "Cevap": req.query.Cevap

    }; 

    var obj = new Bulmaca(data);
    obj.save(function (err) {
      if (err) return handleError(err);
      res.render('index',{
        title: "Add" ,
        content: JSON.stringify(data)
      });
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