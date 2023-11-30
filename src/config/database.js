require('dotenv').config(); 

module.exports = {
    dialect: "mysql",
    host: "localhost",
    username: process.env.user,
    password: process.env.password,
    database: process.env.database,
    port: 3306,
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
}