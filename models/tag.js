var mongoose = require("mongoose");

var tagSchema = new mongoose.Schema({
  tagName: {
    type: String,
    required: true
  },
  comments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Comment'
  }],
  posts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post'
  }]
}, {
  timestamps: true
});

var Tag = mongoose.model('Tag', tagSchema);
module.exports = Tag;
