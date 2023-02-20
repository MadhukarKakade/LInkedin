const express=require("express")
const connection = require("./configs/db")
const { userRouter } = require("./routes/userRoutes")


const app=express()


app.use(express.json())

app.use("/user",userRouter)

app.get("/",(req,res)=>{
    console.log("This is the Home page of Linkedin APP")
    res.send({msg:"This is the Home page of Linkedin APP"})
})


const port=process.env.PORT
app.listen(port,async()=>{

    try{

        await connection
        console.log("sever is connected to DB")

    }catch(err){
        console.log("Something went wrong")
        console.log(err.message)
    }

    console.log("server run on http//localhost:"+port)
})