require('dotenv').load()
var jwt = require("jsonwebtoken")


exports.loginRequired = function (req, res, next) {
  try {
    var token = req.headers.authorization.split(" ")[1]
    jwt.verify(token, process.env.SECRET_KEY, function (err, decoded) {
      if (decoded) {
        next();
      } else {
        res.status(401).json({ message: "Please log in first" })
      }
    });
  } catch (e) {
    res.status(401).json({ message: "Please log in first" })
  }
}

exports.ensureCorrectUser = function (req, res, next) {
  try {
    var token = req.headers.authorization.split(" ")[1]
    jwt.verify(token, process.env.SECRET_KEY, function (err, decoded) {
      if (decoded && decoded.userId === req.params.id) {
        next();
      } else {
        res.status(401).json({ message: "You do NOT have the proper credentials for this action." })
      }
    });
  } catch (e) {
    res.status(401).json({ message: "Unauthorized" })
  }
}

// exports.ensureCorrectRole = function (req, res, next) {
//   try {
//     var token = req.headers.authorization.split(" ")[1]
//     jwt.verify(token, process.env.SECRET_KEY, function (err, decoded) {
//       if (decoded && req.body.userRole === 0) {
//         next();
//       } else {
//         res.status(401).json({ message: "Must be an admin to perform this action." })
//       }
//     })
//   } catch (e) {
//     res.status(401).json({ message: "Please login." })
//   }
// }

exports.ensureCorrectRole = function (req, res, next) {
  try {
    var token = req.headers.authorization.split(" ")[1];
    // var authHeader = req.headers.authorization;
    // var userId = req.headers.userId.split(" ")[1];
    var role = req.headers.role.split(" ")[1];
    // console.log(authHeader);
    // console.log(role);
    // console.log(typeof role);
    // console.log(token);
    jwt.verify(token, process.env.SECRET_KEY, function (err, decoded) {
      if (decoded) {

        if (decoded && role === "0") {
          // console.log(decoded.userId);
          next();
        } else {
          // console.log(decoded.userId);
          res.status(401).json({
            message: "Must be an admin to perform this action.",
            decoded: decoded,
            id: decoded.userId
          })
        }
      } else {
        res.status(401).json({
          message: "Please login.",
          decoded: decoded,
          id: decoded.userId
        });
      }
    })
  } catch (e) {
    res.status(401).json({ message: "Please login." })
  }
}
