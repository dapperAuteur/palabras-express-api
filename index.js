require("dotenv").config()
var express = require('express'),
    app = express(),
    cors = require('cors'),
    bodyParser = require('body-parser');
    authRoutes = require("./routes/auth");

var db = require("./models");
var authRoutes = require('./routes/auth');
var gameRoutes = require('./routes/games');
var fourLetterWordRoutes = require('./routes/fourLetterWords');
var prefixSuffixRootRoutes = require('./routes/prefixSuffixRoots');
var userRoutes = require('./routes/users');
var verboRoutes = require('./routes/verbos');
var auth = require('./middleware/auth');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
  res.send("Hola From Root Route");
});

app.use('/api/ver0001/users/:id/games',
        auth.loginRequired, auth.ensureCorrectUser,
        gameRoutes);
app.use('/api/ver0001/users',
        // auth.loginRequired,
        userRoutes);
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
app.use('/api/ver0001/games', gameRoutes);
app.post('/api/ver0001/games/', gameRoutes, auth.ensureCorrectRole);
app.put('/api/ver0001/games/:id', gameRoutes, auth.ensureCorrectRole);
app.delete('/api/ver0001/games/:id', gameRoutes, auth.ensureCorrectRole);

app.use('/api/ver0001/fourLetterWords', fourLetterWordRoutes);
app.post('/api/ver0001/fourLetterWords/', fourLetterWordRoutes, auth.ensureCorrectRole);
app.put('/api/ver0001/fourLetterWords/:id', fourLetterWordRoutes, auth.ensureCorrectRole);
app.delete('/api/ver0001/fourLetterWords/:id', fourLetterWordRoutes, auth.ensureCorrectRole);

app.use('/api/ver0001/prefixSuffixRoots', prefixSuffixRootRoutes);
app.post('/api/ver0001/prefixSuffixRoots/', prefixSuffixRootRoutes, auth.ensureCorrectRole);
app.put('/api/ver0001/prefixSuffixRoots/:id', prefixSuffixRootRoutes, auth.ensureCorrectRole);
app.delete('/api/ver0001/prefixSuffixRoots/:id', prefixSuffixRootRoutes, auth.ensureCorrectRole);

app.use('/api/ver0001/verbos', verboRoutes);
app.post('/api/ver0001/verbos/', verboRoutes, auth.ensureCorrectRole);
app.put('/api/ver0001/verbos/:id', verboRoutes, auth.ensureCorrectRole);
app.delete('/api/ver0001/verbos/:id', verboRoutes, auth.ensureCorrectRole);
app.use('/api/ver0001/users', userRoutes);
app.get('/api/ver0001/users/', userRoutes, auth.ensureCorrectRole);
// app.post('/api/ver0001/users/', userRoutes, auth.ensureCorrectRole);
app.put('/api/ver0001/users/:id', userRoutes, auth.ensureCorrectRole);
app.delete('/api/ver0001/users/:id', userRoutes, auth.ensureCorrectRole);

const PORT = process.env.PORT || 8081;

app.listen(PORT, function () {
  console.log(`My App is Running on port ${PORT}`);
});
