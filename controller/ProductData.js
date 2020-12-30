var MallProducts = [
    {
        productName: "Mobile",
        productId: "1",
        category: "Electronic"
    },
    {
        productName: "laptop",
        productId: "2",
        category: "Electronic"
    },
    {
        productName: "Chocolate",
        productId: "3",
        category: "Grocery"
    },
    {
        productName: "T-shirt",
        productId: "4",
        category: "Clothing"
    }
]

let postProduct = (req,res) => {
    if(req.body == null){
        res.send("Bad Request").status(400)
    }
    else{
        let productAdd = {
            productName: req.body.productName,
            productId: req.body.productId,
            category: req.body.category
        }
        MallProducts.push(productAdd)
        res.json(MallProducts)
    }
}

let putProduct = (req,res) => {
    if(req.body == null){
        return res.send("Bad request").status(400)
    }else{
    MallProducts.forEach((item)=>{
        if(item.productId == req.params.ProductId){
            item.productName = req.body.productName,
            item.category = req.body.category
        }
    })
     res.json(MallProducts)
}
}


//postProductCat
let getProductsWithCategory = (req,res)=>{
    if(req.params.ProductId != null){
            var result1 = MallProducts.filter((item)=>item.category == req.params.category)
            res.json(result1)
        }
        else{
            res.send("Bad Request").status(400)
        }
}

// delete Product
let deleteProduct = (req,res)=>{
    if(req.params.ProductId != null){

   MallProducts.forEach((item,index)=>{
       if(item.ProductId == req.params.ProductId){
           MallProducts.splice(index,1)
       }
   })
    res.json(MallProducts)
}
else{
    res.send("Bad Request").status(400)
}
}





module.exports = {postProduct,putProduct,deleteProduct,getProductsWithCategory}




















