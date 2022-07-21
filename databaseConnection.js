const config = require('./databaseConfig')
const mysql = require('mysql2');

const connection = mysql.createConnection(config);
console.log(connection)

module.exports = connection;