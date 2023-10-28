const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'bambopl'
})

connection.connect()

//connection.query('SELECT * FROM users', () => {

  //console.log("");
//})

connection.end()