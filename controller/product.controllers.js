const { Product, Category, Sequelize } = require("../model");

exports.create = async (req, res) => {
    const { name, cost, categoryId } = req.body;

    try {


        const product = {
            name: name,
            cost: cost,
            categoryId: categoryId
        }

        const result = await Product.create(product);
        res.status(201).send(result)

    }
    catch (err) {
        res.status(500).send({ message: "Something went wrong" })
    }
}




exports.getAll = async (req, res) => {

    try {

        let result;
        if (req.query.minCost && req.query.maxCost)
        {
            result=await Product.findAll({
                where:{
                    cost:{[Sequelize.Op.between]:[req.query.minCost,req.query.maxCost]}
                }
            })
        }
        else if (req.query.minCost) {
            result = await Product.findAll({
                where: {
                    cost: { [Sequelize.Op.gte]: req.query.minCost }
                }
            })
        }
        else if (req.query.maxCost) {
            result = await Product.findAll({
                where: {
                    cost: { [Sequelize.Op.lte]: req.query.maxCost }
                }
            })
        }
        else if(req.query.name)
        {
            result=await Product.findAll({
                where:{
                    name:req.query.name
                }
            })
        }
        else {
            result = await Product.findAll();
        }
        res.status(200).send(result);
    }
    catch (err) {
        res.status(500).send({ message: "Something went wrong" })
    }
}




exports.getAllByCategory = async (req, res) => {
    const categoryId = req.params.categoryId;

    try {

        const productResult = await Product.findAll({
            where: {
                categoryId: categoryId
            }
        });
        res.status(200).send(productResult)
    }
    catch (err) {
        res.status(500).send({ message: "Something went wrong" })
    }
}




exports.getOne = async (req, res) => {
    const productId = req.params.productId;

    try {
        const result = await Product.findByPk(productId);
        if (!result) {
            res.status(404).send({ message: "Product Not Found" })
        }
        res.status(200).send(result)
    }
    catch (err) {
        res.status(500).send({ message: "something went wrong" })
    }
}




exports.update = async (req, res) => {
    const productId = req.params.productId;

    const { name, cost, categoryId } = req.body;

    const product = {};

    if (name) {
        product.name = name
    }
    if (cost) {
        product.cost = cost
    }
    if (categoryId) {
        product.categoryId = categoryId
    }

    try {
        const result = await Product.update(product, {
            where: {
                id: productId
            }
        })
        res.status(201).send({ message: "Product updated successfully" })
    }
    catch (err) {
        res.status(500).send({ message: "Something went wrong" })
    }
}

exports.delete = async (req, res) => {
    const productId = req.params.productId;

    try {
        const result = await Product.destroy({
            where: {
                id: productId
            }
        })
        res.status(201).send({ message: "Product deleted successfully" })

    }
    catch (err) {
        res.status(500).send({ message: "Something went worng" })
    }
}