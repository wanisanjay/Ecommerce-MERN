const categoryController=require("../controller/category.controllers");

module.exports = (app) => {

    //Add Category
    app.post("/ecom/api/v1/category", categoryController.create)

    //Get all category
    app.get("/ecom/api/v1/category", categoryController.getAll)

    //Get one category By ID
    app.get("/ecom/api/v1/category/:categoryId", categoryController.getOne)

    //Update category By ID
    app.put("/ecom/api/v1/category/:categoryId", categoryController.update)

    //Delete category By ID
    app.delete("/ecom/api/v1/category/:categoryId", categoryController.delete)
}