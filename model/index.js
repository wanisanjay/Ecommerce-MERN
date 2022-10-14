const Sequelize=require("sequelize");
const dbConfig = require("../config/db.config");

const sequelize=new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        host:dbConfig.HOST,
        dialect:dbConfig.dialect,
        pool:{
            max:dbConfig.pool.max,
            min:dbConfig.pool.min,
            idle:dbConfig.pool.idle,
            accquire:dbConfig.pool.acquire
        }
    }
);

const db={};
db.Sequelize=Sequelize;
db.sequelize=sequelize;

//Category Model
db.Category=require("./category.model")(Sequelize,sequelize);

//Product Model
db.Product=require("./product.model")(Sequelize,sequelize);


//Category and product has many to one Relationship
db.Category.hasMany(db.Product);
db.Product.belongsTo(db.Category);

module.exports=db;