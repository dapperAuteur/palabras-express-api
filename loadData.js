const db = require("./models");
const prefix_root_suffix = require('./data/prefix_root_suffix_library');


let word = [];



// console.log(words);

for (var i = 0; i < prefix_root_suffix.length; i++) {
  var p = db.PrefixSuffixRoot.create(prefix_root_suffix[i]);

}
console.log("done");
