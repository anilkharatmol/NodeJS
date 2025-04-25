const getProducts = (req,res)=>{
    res.send("fetching all products")
}

const postProducts = (req,res)=>{
    res.send("Adding a new product")
}

const getProductId = (req,res)=>{
    

    res.send(`Fetching product with ID: ${parseInt(req.params.productId)}`)
}

module.exports = {
    getProducts,
    postProducts,
    getProductId
}