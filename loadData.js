const db = require("./models");
const verbos = require('./data/db/verbosDB');
const slugify = require('@sindresorhus/slugify');


// let word = [];



// console.log(words);
// will seed data into table/collection
for (var i = 0; i < verbos.length; i++) {
  verbos[i].spanishSlug = slugify(verbos[i].spanish);
  // console.log(verbos[i].spanishSlug);
  db.Verbo.findOneAndUpdate({ _id: verbos[i]._id }, verbos[i])
    .then(function (verbo) {
      console.log(verbo.spanishSlug);
    })
    .catch(function (err) {
      console.log(err);
    });
}

console.log("done");
