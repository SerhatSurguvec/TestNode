var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();


router.get('/:userId', function(req, res) {
  Posts.find({ user: req.params.userId }, function(err, posts) {
     Posts.populate(posts, {path: 'user'}, function(err, posts) {
      // console.log({user: req.params.userId});
      res.send(posts);
     });
  });
});

router.get('/', function(req, res) {
  Posts.find( function(err, posts) {
      res.send(posts);
  });
});

module.exports = router;