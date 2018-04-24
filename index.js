require("dotenv").config()
var express = require('express'),
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
var transactionRoutes = require('./routes/transactions');
var userRoutes = require('./routes/users');
var verboRoutes = require('./routes/verbos');
var auth = require('./middleware/auth');
const errorHandler = require("./handlers/error");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
  res.send("Hola From Root Route");
});

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

app.get('/api/ver0001/fourLetterWords', fourLetterWordRoutes);
app.get('/api/ver0001/fourLetterWords/:id', fourLetterWordRoutes);
app.delete('/api/ver0001/fourLetterWords/:id', auth.ensureCorrectRole, fourLetterWordRoutes);
app.post('/api/ver0001/fourLetterWords/', auth.ensureCorrectRole, fourLetterWordRoutes);
app.put('/api/ver0001/fourLetterWords/:id', auth.ensureCorrectRole, fourLetterWordRoutes);
app.use('/api/ver0001/fourLetterWords', fourLetterWordRoutes);

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

app.get('/api/ver0001/prefixSuffixRoots', prefixSuffixRootRoutes);
app.get('/api/ver0001/prefixSuffixRoots/:id', prefixSuffixRootRoutes);
app.delete('/api/ver0001/prefixSuffixRoots/:id', auth.ensureCorrectRole, prefixSuffixRootRoutes);
app.post('/api/ver0001/prefixSuffixRoots/', auth.ensureCorrectRole, prefixSuffixRootRoutes);
app.put('/api/ver0001/prefixSuffixRoots/:id', auth.ensureCorrectRole, prefixSuffixRootRoutes);
app.use('/api/ver0001/prefixSuffixRoots', prefixSuffixRootRoutes);

app.use('/api/ver0001/users/:id/transactions', auth.ensureCorrectRole, transactionRoutes);
app.get('/api/ver0001/transactions/:id', auth.ensureCorrectRole, transactionRoutes);
app.delete('/api/ver0001/transactions/:id', auth.ensureCorrectRole, transactionRoutes);
app.post('/api/ver0001/transactions/', auth.ensureCorrectRole, transactionRoutes);
app.put('/api/ver0001/transactions/:id', auth.ensureCorrectRole, transactionRoutes);
app.use('/api/ver0001/transactions/', auth.ensureCorrectRole, transactionRoutes);

app.get('/api/ver0001/users/:id', auth.ensureCorrectRole, userRoutes);
app.delete('/api/ver0001/users/:id', auth.ensureCorrectRole, userRoutes);
app.post('/api/ver0001/users', auth.ensureCorrectRole, userRoutes);
app.put('/api/ver0001/users/:id', auth.ensureCorrectRole, userRoutes);
app.use('/api/ver0001/users', auth.ensureCorrectRole, userRoutes);

// app.use('/api/ver0001/verbos/:id', verboRoutes);

app.get('/api/ver0001/verbos', verboRoutes);
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
