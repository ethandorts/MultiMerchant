import mysql from 'mysql';

const DatabaseConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'multivendor',
    port: '',
})

DatabaseConnection.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL database: ' + err.stack);
      return;
    }
    console.log('Connected to MySQL database as id ');
  });

export default DatabaseConnection;