var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/bulletinboard');

var Post = mongoose.model('posts', { title: String, content : String });

router.post('/', function(req, res, next) {
  var post = new Post(req.body);
  post.save(function (err) {
  if (err) // ...
    console.log(err);
  });
  res.send('OK');
});

router.get("/",function(req,res,next){
  return Post.find(function (err, posts) {
    if (!err) {
      return res.send(posts);
    } else {
      return console.log(err);
    }
  });
});

module.exports = router;
