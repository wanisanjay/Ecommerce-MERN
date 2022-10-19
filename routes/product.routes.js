const productController = require("../controller/product.controllers");
const { validateRequest } = require("../middleware");

module.exports = (app) => {
    //Create Product
    app.post("/ecom/api/v1/product", [validateRequest.checkProductData], productController.create)

    //Get All product
    app.get("/ecom/api/v1/product", productController.getAll)

    //Get All product by category
    app.get("/ecom/api/v1/category/:categoryId/product", [validateRequest.checkCategoryExist], productController.getAllByCategory)

    //Get one Product By ID
    app.get("/ecom/api/v1/product/:productId", productController.getOne)

    // Update Product By ID
    app.put("/ecom/api/v1/product/:productId", productController.update)

    //Delete Product By ID
    app.delete("/ecom/api/v1/product/:productId", productController.delete)
}