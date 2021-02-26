const User = require("../models/user.model");
class verifyRegister{
    static checkDuplicateUsernameOrEmail (req, res, next) {
      // Username
      User.findOne({username: req.body.username})
      .exec((err, user) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }
        if (user) {
          next({name:'ALREADY EXIST'});
          return;
        }
          // Email
          User.findOne({email: req.body.email})
          .exec((err, user) => {
              if (err) {
                  res.status(500).send({ message: err });
                  return;
              }
    
              if (user) {
                next({name:'ALREADY EXIST'});
                return;
              }
              next();
          });
      });
    }
}

module.exports = verifyRegister;