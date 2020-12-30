

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

let getProduct = (req,res) =>  res.json(MallProducts.filter((item) => item.category == req.params.category))


let postProductId = (req,res) => res.json(MallProducts.filter((item) =>  item.productId == req.params.productId ))

let postProductCat = (req,res) => {
    MallProducts.push(req.params)
    res.send("Product Saved")
}


module.exports = {getProduct,postProductId,postProductCat}




















