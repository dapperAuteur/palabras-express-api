var mongoose = require("mongoose");
var User = require("./user");
var Post = require("./post");

var commentSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  tags: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Tag'
  }],
  currentUserId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  postId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post',
    required: true
  }
}, {
  timestamps: true
});

var Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;
