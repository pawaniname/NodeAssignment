const express = require('express')
const router = express.Router();
const {getProduct,postProductCat,postProductId} = require("../controller/ProductData")

//http://localhost:8080/product/Clothing
// http://localhost:8080/productId/1
//http://localhost:8080/addProduct/HandWash/5/Bathroom
router.get("/product/:category",getProduct)

router.get("/productId/:productId",postProductId)

router.get("/addProduct/:productName/:productId/:category",postProductCat)


module.exports = router

