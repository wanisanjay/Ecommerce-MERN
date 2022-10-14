module.exports=(Sequelize,sequelize)=>{
    const Product=sequelize.define("product",{
        id:{
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        name:{
            type:Sequelize.STRING,
        },
        cost:{
            type:Sequelize.INTEGER
        }
    },
    {
        tableName:"products"
    })

    return Product;
};