const Sequelize = require('sequelize');
console.log (process.env.DB_NAME,process.env.DB_USER)
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
    sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, null, {
        host: '127.0.0.1',
        dialect: 'mysql',
       // dialectOptions: {
          //  decimalNumbers: true,
         // },
        port: 3306
    });
}
module.exports = sequelize;