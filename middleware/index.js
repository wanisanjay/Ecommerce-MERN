const signUpValidator = require("./signUpValidator.middleware");
const validateRequest = require("./validateRequest.middleware");

module.exports = {
    validateRequest: validateRequest,
    signUpValidator: signUpValidator
}