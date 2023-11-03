const mysql = require('mysql2')
const db = mysql.createConnection({
host: "localhost",
user: "root",
password: "Jedidiah213",
database:"myfoodchoice" 
})

module.exports = db;