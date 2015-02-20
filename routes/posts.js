var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();


router.get('/:userId', function(req, res) {
  mongoose.model('posts').find({ user: req.params.userId }, function(err, posts) {
     mongoose.model('posts').populate(posts, {path: 'user'}, function(err, posts) {
      // console.log({user: req.params.userId});
      res.send(posts);
     });
  });
});

module.exports = router;