const crypt = require("bcrypt");

const passwordHash = async (req, res, next) => {
  let { password, email } = req.body;

  if (password) {
    crypt.hash(password, 5, async function (err, hash) {
      if (err) {
        console.log("something wrong in hashing");
        res.send(err);
        
      } else {
      req.body.password = hash;
      console.log(hash);
        next();
      }
    });
  }
};



module.exports = { passwordHash };
