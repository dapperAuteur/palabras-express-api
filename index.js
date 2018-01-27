require("dotenv").config()
var express = require('express'),
    app = express(),
    cors = require('cors'),
    bodyParser = require('body-parser');
    authRoutes = require("./routes/auth");

var db = require("./models");
var authRoutes = require('./routes/auth');
var gameRoutes = require('./routes/games');
var palabraRoutes = require('./routes/palabras');
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
        auth.loginRequired,
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
app.use('/api/ver0001/palabras', palabraRoutes);
app.use('/api/ver0001/prefixSuffixRoots', prefixSuffixRootRoutes);
app.use('/api/ver0001/verbos', verboRoutes);
app.use('/api/ver0001/users', userRoutes);

const PORT = 8081;

app.listen(PORT, function () {
  console.log(`My App is Running on port ${PORT}`);
});
