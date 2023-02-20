const validateRegisterFiled = (req, res, next) => {
  const { name, email, gender, password, age, city } = req.body;

  if (name && email && gender && password && age && city) {
    next();
  } else {
    res.send({ msg: "please fill all required fileds" });
  }
};

const validateLoginFiled = (req, res, next) => {
  const { email, password } = req.body;

  if (email && password) {
    next();
  } else {
    res.send({ msg: "please fill all required fileds" });
  }
};

const validatePostFiled = (req, res, next) => {
  const { title, body, device, no_if_comments } = req.body;

  if (title&& body&& device&& no_if_comments) {
    console.log("valid")
    next();
  } else {
    res.send({ msg: "please fill all required fileds" });
  }
};

module.exports = { validateRegisterFiled, validateLoginFiled,validatePostFiled };
