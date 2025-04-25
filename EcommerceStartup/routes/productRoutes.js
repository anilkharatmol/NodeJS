const express = require("express");

const router = express.Router();

router.get("/",(req,res)=>{
    res.send("Fetching all products")
})

router.post("/",(req,res)=>{
    res.send("Adding a new product")
})

router.get("/:productId",(req,res)=>{
    console.log(req.params.productId);
    
    res.send(`Fetching product with ID: ${parseInt(req.params.productId)}`)
})

module.exports = router;