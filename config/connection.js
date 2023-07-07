const Sequelize = require('sequelize');
require('dotenv').config();
let sequelize;
console.log (process.env.DB_NAME, process.env.DB_USER)
if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL, {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
    });
} else {
    sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, {
        host: 'localhost',
        dialect: 'mysql',
       // dialectOptions: {
          //  decimalNumbers: true,
         // },
        port: 3306
    });
}
module.exports = sequelize;