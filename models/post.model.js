const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
    title :{type:String,require:true},
    body :{type:String,require:true},
    device : {type:String,require:true},
    no_if_comments :{type:Number,require:true}
});

const postModel = mongoose.model("user", postSchema);

module.exports = { postModel };
