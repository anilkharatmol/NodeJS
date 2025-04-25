const express = require("express");
const {getProducts,postProducts,getProductId} = require("../controllers/productCotroller") 

const router = express.Router();

router.get("/",getProducts)

router.post("/",postProducts)

router.get("/:productId",getProductId)

module.exports = router;