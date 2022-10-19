const { User } = require("../model");

const checkDuplicateUser = async (req, res, next) => {
    const { userName, email } = req.body;
    const userCheck = User.findOne({
        where: {
            userName: userName
        }
    })
    const emailCheck = User.findOne({
        where: {
            email: email
        }
    });

    const result = await Promise.all([userCheck, emailCheck]);

    if (result[0]) {
        res.status(401).send({ message: "UserName is already taken." })
        return;
    }
    if (result[1]) {
        res.status(401).send({ message: "User with this email is already exists." })
        return;
    }
    next();
}

module.exports={
    checkDuplicateUser:checkDuplicateUser
}