const { userModel } = require("../models/user.model");

const bcrypt = require("bcrypt");
const { config } = require("dotenv");
const jwt = require("jsonwebtoken");
require("dotenv"),config()

const register = async (req, res) => {
  try {
    const check = await userModel.find({ email: req.body.email });
    if (check.length == 0) {
      const user = new userModel(req.body);
      await user.save();
      res.send({ msg: "user Register successfully ", data: user });
    } else {
      res.send({ msg: "User already exist, please login" });
    }
  } catch (err) {
    console.log("Something went wrong");
    res.send({msg:"Something went wrong",err:err.message});
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const check = await userModel.find({ email: email });
    console.log(check[0].password, password);
    if (check.length == 1) {
      const match = await bcrypt.compare(password, check[0].password);

      if (match) {
        //login
        var token = await jwt.sign(req.body, process.env.KEY);
        res.send({ msg: "user login successfully ", token: token });
      }else{
        res.send({ msg: "please write correct password" });
      }
    } else {
      res.send({ msg: "User not find, please register first" });
    }
  } catch (err) {
    console.log("Something went wrong");
    res.send({msg:"Something went wrong",err:err.message});
  }
};

module.exports = { register, login };
