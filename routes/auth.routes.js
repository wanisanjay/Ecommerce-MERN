const authController = require("../controller/auth.controllers");
const { validateRequest, signUpValidator } = require("../middleware");

module.exports = (app) => {
    app.post("/ecom/api/v1/signUp", [validateRequest.checkUserData, signUpValidator.checkDuplicateUser], authController.signUp)
}