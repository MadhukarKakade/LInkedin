
require("dotenv").config()
const decryptToken=async(req,res,next)=>{
    const token=req.headers.authentication.split(" ")[1]
    console.log(token)
    var decoded = jwt.verify(token, process.env.KEY);
    console.log(decoded)
    next()
}


module.exports={decryptToken}