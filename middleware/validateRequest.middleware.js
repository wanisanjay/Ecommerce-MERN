const { Category } = require("../model");

const checkCategoryExist = async (req, res, next) => {
    const categoryId = req.params.categoryId;
    try {
        const result = Category.findByPk(categoryId)
        if (!result) {
            res.status(404).send({ message: "Category ID does not exist" })
            return;
        }
        next();
    }
    catch (err) {
        res.status(500).send({ message: "Something went wrong" })
        return;
    }
}

const checkProductData = (req, res, next) => {
    const { name, categoryId } =req.body;

    if (!name) {
        res.status(400).send({ message: "Product name cannot be empty" });
        return;
    }
    if (!categoryId) {
        res.status(400).send({ message: "Product category cannot be empty" });
        return;
    }
    next();
}

const checkUserData = (req,res,next) => {
    const{userName,email,password}=req.body;
    if(!userName)
    {
        res.status(401).send({message:"User cannot be empty!"});
        return;
    }
    else if(!email)
    {
        res.status(401).send({message:"email cannot be empty!"});
        return;
    }
    else if(!password)
    {
        res.status(401).send({message:"password cannot be empty!"});
        return;
    }
    next();
}

module.exports = {
    checkCategoryExist: checkCategoryExist,
    checkProductData: checkProductData,
    checkUserData: checkUserData
}