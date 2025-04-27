const path = require("path");



const getProducts = (req,res)=>{
    res.sendFile(path.join(__dirname,"..","views","product.html"))
}

const postProducts = (req,res)=>{
   res.json(req.body);
}

const getProductId = (req,res)=>{
    

    res.send(`Fetching product with ID: ${parseInt(req.params.productId)}`)
}

module.exports = {
    getProducts,
    postProducts,
    getProductId
}