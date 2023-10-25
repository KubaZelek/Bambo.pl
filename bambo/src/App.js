import './App.css';
const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'dbuser',
  password: 's3kreee7',
  database: 'my_db'
})

connection.connect()


function App() {
  return (
    <div className="App">
      <h1>bambopl</h1>
    </div>
  );
}


connection.end()

export default App;
