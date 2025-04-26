const getCartForUser = (req,res)=>{
    res.send(`Fetching cart for user with ID: ${parseInt(req.params.userId)}`)
}

const addProductToCart = (req,res)=>{
    res.send(`Adding product to cart for user with ID: ${parseInt(req.params.userId)}`)
}

module.exports ={
    getCartForUser,
    addProductToCart
}