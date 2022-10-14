const { Category } = require("../model");

exports.create=(req,res)=>{
    const {name,description}=req.body;

    if(!name)
    {
        res.status(400).send({message:"Category name cannot be empty."})
    }

    const category={
        name:name,
        description:description
    }

    Category.create(category)
    .then((result)=>{
        res.status(201).send(result);
    })
    .catch((err)=>{
        res.status(500).send({message:"Something went wrong"})
    })
}

exports.getAll=(req,res)=>{
    Category.findAll()
    .then((result)=>{
        res.status(200).send(result);
    })
    .catch((err)=>{
        res.status(500).send({message:"Something Went Wrong"})
    })
}

exports.getOne=(req,res)=>{
    const categoryId=req.params.categoryId;

    Category.findByPk(categoryId)
    .then((result)=>{
        if(!result)
        {
            res.status(404).send({message:"Category not found"})
        }
        res.status(200).send(result);
    })
    .catch((err)=>{
        res.status(500).send({message:"Something went Wrong"})
    })
}

exports.update=(req,res)=>{
    const categoryId=req.params.categoryId;
    const {name,description}=req.body;

    const category={};
    
    if(name)
    {
        category.name=name;
    }
    if(description)
    {
        category.description=description;
    }

    Category.update(category,{
        where:{
            id:categoryId
        }
    })
    .then((result)=>{
        res.status(201).send({message:"Category Updated Successfully"})
    })
    .catch((err)=>{
        res.status(500).send({message:"Something went wrong"})
    })
}

exports.delete=(req,res)=>{
    const categoryId=req.params.categoryId;

    Category.destroy({
        where:{
            id:categoryId
        }
    })
    .then((result)=>{
        res.status(201).send({message:"Category deleted Successfully"})
    })
    .catch((err)=>{
        res.status(500).send({message:"Something went Wrong"});
    })
};