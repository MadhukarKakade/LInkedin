const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {type:String,require:true},
  email: {type:String,require:true},
  gender:{type:String,require:true},
  password: {type:String,require:true},
  age:{type:Number,require:true},
  city:{type:String,require:true,}
});

const userModel = mongoose.model("user", userSchema);

module.exports = { userModel };
