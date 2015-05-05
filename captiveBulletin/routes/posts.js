var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/bulletinboard');

var Post = mongoose.model('posts', { title: String, content : String });

/* POST users listing. */
router.post('/', function(req, res, next) {
  var post = new Post(req.body);
  post.save(function (err) {
  if (err) // ...
  console.log('meow');
  });
});

module.exports = router;
