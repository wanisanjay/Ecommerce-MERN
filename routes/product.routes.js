const productController=require("../controller/product.controllers")

module.exports = (app) => {
    //Create Product
    app.post("/ecom/api/v1/product",productController.create)
}