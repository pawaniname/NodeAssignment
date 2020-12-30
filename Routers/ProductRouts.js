const express = require('express')
const router = express.Router();
const objProduct = require("../controller/ProductData")

//http://localhost:8080/product/Clothing
// http://localhost:8080/productId/1
//http://localhost:8080/addProduct/HandWash/5/Bathroom
router.get("/product/:category",objProduct.getProductsWithCategory)

router.post("/addProduct",objProduct.postProduct)

router.put("/updateProduct",objProduct.putProduct)

router.delete("/deleteProduct",objProduct.deleteProduct)
module.exports = router

