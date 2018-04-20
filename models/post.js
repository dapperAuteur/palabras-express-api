var mongoose = require("mongoose");
var User = require("./user");

var postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  comments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Comment'
  }],
  tags: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Tag'
  }]
}, {
  timestamps: true
});

postSchema.pre('save', function (next) {
  var user = this;
  if (!post.isModified('password')) return next();
  bcrypt.hash(post.password, 10).then(function functionName(hashedPassword) {
    post.password = hashedPassword
    next();
  }, function (err) {
    return next(err)
  });
});

postSchema.methods.comparePassword = function (postCandidatePassword, next) {
  bcrypt.compare(postCandidatePassword, this.password, function (err, isMatch) {
    if (err) return next(err);
    next(null, isMatch);
  });
};

var Post = mongoose.model('Post', postSchema);
module.exports = Post;
