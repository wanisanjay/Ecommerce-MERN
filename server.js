const express = require("express");
const serverConfig = require("./config/server.config");

const db = require("./model");

const categoryController = require("./controller/category.controllers");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json())


db.sequelize.sync()
    .then(() => {
        console.log("DB is sync");
    })

//Category Routes
require("./routes/category.routes")(app);

//Product Routes
require("./routes/product.routes")(app);

//Auth Routes
require("./routes/auth.routes")(app);

app.listen(serverConfig.PORT, () => {
    console.log("Server is running");
})