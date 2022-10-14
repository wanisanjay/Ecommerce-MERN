module.exports={
    HOST : "localhost",
    USER : "root",
    PASSWORD : "",
    DB : "ecom",
    dialect : "mysql",
    pool : {
        max : 5,
        min : 0,
        acquire : 30000,  // max time in ms that a pool will try to get connection before throwing error
        idle : 10000      // max time in ms that a connection can be idle before being released
    }
};