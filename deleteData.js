const db = require("./models");


let verbos = function (req, res){db.Verbo.find()
  .then(function (verbos) {
    res.json(verbos);
  })
  .catch(function (err) {
    res.send(err);
  });}
  verbos();
console.log(verbos);


// for (var i = 0; i < spanish_words.length; i++) {
//   var p = db.Verbo.delete(spanish_words[i]);
//
// }
console.log("done");
