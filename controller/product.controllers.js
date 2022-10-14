const { Product } = require("../model");

exports.create=(req,res)=>{
    const {name,cost,categoryId}=req.body;

    if(!name)
    {
        res.status(400).send({message:"Product cannot be empty"});
    }
    if(!categoryId)
    {
        res.status(400).send({message:"Product cannot be empty"});
    }

    const product={
        name:name,
        cost:cost,
        categoryId:categoryId
    }

    Product.create(product)
    .then((result)=>{
        res.status(201).send(result)
    })
    .catch((err)=>{
        res.status(500).send({message:"Something went wrong"})
    })
};