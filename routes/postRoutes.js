const express=require("express")

const postRouter=express.Router()


postRouter.get("/",)

postRouter.get("/top",)

postRouter.patch("/update",)
postRouter.delete("/delete",)

module.exports={postRouter}

// /posts ==> This will show the posts of logged in users.
// /posts/top ==> This will show the post details that has maximum number of comments for the user who has logged in.
// /posts/update ==> The logged in user can update his/her posts.
// /posts/delete ==> The logged in user can delete his/her posts.