const express = require('express');
const {userSignup,userLogin} = require("../controllers/auth.controller");
const authMiddleware = require("../middlewares/auth.middlewares")


const authRouter = express.Router();


authRouter.post("/signup",userSignup);
authRouter.post("/login",userLogin);
authRouter.get("/profile", authMiddleware, (req,res) => {
    try {

        return res.status(200).json({msg:"This is user profile",user:req.user})
    } catch (error) {
        return res.status(500).json({msg:"Internal Server Error"})
    }
})




module.exports = authRouter;