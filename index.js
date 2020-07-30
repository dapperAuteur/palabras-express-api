require("dotenv").config()
var express = require('express'), // Comma operator (s) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comma_Operator
    app = express(),
    cors = require('cors'),
    bodyParser = require('body-parser');
    authRoutes = require("./routes/auth");

var db = require("./models");
var authRoutes = require('./routes/auth');
var fourLetterWordRoutes = require('./routes/fourLetterWords');
var gameRoutes = require('./routes/games');
var postRoutes = require('./routes/posts');
var prefixSuffixRootRoutes = require('./routes/prefixSuffixRoots');
var tagRoutes = require('./routes/tags');
var txRoutes = require('./routes/transactions');
var userRoutes = require('./routes/users');
var verboRoutes = require('./routes/verbos');
var auth = require('./middleware/auth');
const errorHandler = require("./handlers/error");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // https://www.npmjs.com/package/body-parser-json

app.get('/', function (req, res) {
  res.send("Hola From Root Route");
});

// why didn't the authorization middleware work

// app.get('/api/ver0001/users/:id', auth.ensureCorrectRole, userRoutes);
// app.delete('/api/ver0001/users/:id', auth.ensureCorrectRole, userRoutes);
// app.post('/api/ver0001/users/', userRoutes);
// app.put('/api/ver0001/users/:id', userRoutes);
// app.use('/api/ver0001/users', auth.ensureCorrectRole, userRoutes);

app.use('/api/ver0001/users/:id/games',
        auth.loginRequired,
        gameRoutes);
// app.use('/api/ver0001/users',
//         // auth.loginRequired,
//         userRoutes);
app.use('/api/ver0001/auth', authRoutes);
// app.get('/api/ver0001/games', function (req, res, next) {
//   db.Game.find().sort({ createdAt: 'desc' })
//     .populate("userId", { username: true, profileImageUrl: true })
//     .then(function (games) {
//       res.json(games);
//     }).catch(function (err) {
//       res.status(500).json(err);
//     })
// });

app.get('/api/ver0001/four-letter-words', fourLetterWordRoutes);
app.get('/api/ver0001/four-letter-words/words/:word', fourLetterWordRoutes);
app.get('/api/ver0001/four-letter-words/:id', fourLetterWordRoutes);
app.delete('/api/ver0001/four-letter-words/:id', auth.ensureCorrectRole, fourLetterWordRoutes);
app.post('/api/ver0001/four-letter-words/', auth.ensureCorrectRole, fourLetterWordRoutes);
app.put('/api/ver0001/four-letter-words/:id', auth.ensureCorrectRole, fourLetterWordRoutes);
app.use('/api/ver0001/four-letter-words', fourLetterWordRoutes); // how does `*.use` differ from other verbs

// must be correct user to change games

app.get('/api/ver0001/games', gameRoutes);
app.get('/api/ver0001/games/:id', gameRoutes);
app.post('/api/ver0001/games/', gameRoutes);
app.put('/api/ver0001/games/:id', gameRoutes);
app.delete('/api/ver0001/games/:id', auth.ensureCorrectRole, gameRoutes);
app.use('/api/ver0001/games', gameRoutes);

app.get('/api/ver0001/posts', postRoutes);
app.get('/api/ver0001/posts/:id', postRoutes);
app.post('/api/ver0001/posts/', postRoutes);
app.put('/api/ver0001/posts/', postRoutes);
app.delete('/api/ver0001/posts/:id', auth.ensureCorrectRole, postRoutes);
app.use('/api/ver0001/posts/', postRoutes);

app.get('/api/ver0001/prefix-suffix-roots', prefixSuffixRootRoutes);
app.get('/api/ver0001/prefix-suffix-roots/:id', prefixSuffixRootRoutes);
app.delete('/api/ver0001/prefix-suffix-roots/:id', auth.ensureCorrectRole, prefixSuffixRootRoutes);
app.post('/api/ver0001/prefix-suffix-roots/', auth.ensureCorrectRole, prefixSuffixRootRoutes);
app.put('/api/ver0001/prefix-suffix-roots/:id', auth.ensureCorrectRole, prefixSuffixRootRoutes);
app.use('/api/ver0001/prefix-suffix-roots', prefixSuffixRootRoutes);

app.get('/api/ver0001/tags', tagRoutes);
app.get('/api/ver0001/tags/:id', tagRoutes);
app.delete('/api/ver0001/tags/:id', auth.ensureCorrectRole, tagRoutes);
app.post('/api/ver0001/tags', auth.loginRequired, tagRoutes);
app.put('/api/ver0001/tags/:id', auth.ensureCorrectRole, tagRoutes);
app.use('/api/ver0001/tags', tagRoutes);

app.use('/api/ver0001/users/:id/tx', auth.ensureCorrectRole, txRoutes);
app.get('/api/ver0001/tx/:id', auth.ensureCorrectRole, txRoutes);
app.delete('/api/ver0001/tx/:id', auth.ensureCorrectRole, txRoutes);
app.post('/api/ver0001/tx/', auth.ensureCorrectRole, txRoutes);
app.put('/api/ver0001/tx/:id', auth.ensureCorrectRole, txRoutes);
app.use('/api/ver0001/tx/', auth.ensureCorrectRole, txRoutes);

app.get('/api/ver0001/users/:id', auth.ensureCorrectRole, userRoutes);
app.delete('/api/ver0001/users/:id', auth.ensureCorrectRole, userRoutes);
app.post('/api/ver0001/users', auth.ensureCorrectRole, userRoutes);
app.put('/api/ver0001/users/:id', auth.ensureCorrectRole, userRoutes);
app.use('/api/ver0001/users', auth.ensureCorrectRole, userRoutes);

// app.use('/api/ver0001/verbos/:id', verboRoutes);

app.get('/api/ver0001/verbos', verboRoutes);
app.get('/api/ver0001/verbos/spanish/:spanish', verboRoutes);
app.get('/api/ver0001/verbos/:id', verboRoutes);
app.delete('/api/ver0001/verbos/:id', auth.ensureCorrectRole, verboRoutes);
app.post('/api/ver0001/verbos/', auth.ensureCorrectRole, verboRoutes);
app.put('/api/ver0001/verbos/:id', auth.ensureCorrectRole, verboRoutes);
app.use('/api/ver0001/verbos', verboRoutes);

const PORT = process.env.PORT || 8081;

app.use(function (req, res, next) {
  let err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.use(errorHandler);

app.listen(PORT, function () {
  console.log(`My App is Running on port ${PORT}`);
});
