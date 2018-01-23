var express = require('express'),
    app = express(),
    port = process.env.PORT || 3030,
    bodyParser = require('body-parser');

var palabraRoutes = require('./routes/palabras');
var verboRoutes = require('./routes/verbos');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
  res.send("Hola From Root Route");
});

app.use('/api/palabras', palabraRoutes);
app.use('/api/verbos', verboRoutes);

app.listen(port, function () {
  console.log("My App is Running on port " + port);
});
