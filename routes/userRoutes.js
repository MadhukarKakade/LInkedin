const express=require("express")
const { passwordHash } = require("../middlewares/passwordHash.middlwares")
const { register, login } = require("../controllers/user.controller")
const {  validateRegisterFiled, validateLoginFiled } = require("../middlewares/validatefiled.middleware")

const userRouter=express.Router()


userRouter.post("/register",validateRegisterFiled, passwordHash, register)

userRouter.post("/login",validateLoginFiled,login)


module.exports={userRouter}

// /users/register ==> To register a new user.
// /users/login ==> For logging in generating a token