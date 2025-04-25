const express = require("express");

const router = express.Router();

router.get("/",(req,res)=>{
    res.send("Fetching all users")
})

router.post("/",(req,res)=>{
    res.send("Adding a new user")
})

router.get("/:userId",(req,res)=>{
    res.send(`Fetching user with ID: ${parseInt(req.params.userId)}`)
})

module.exports = router;