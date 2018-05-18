//Sets up the MYSQL Connection:
var mysql = require ("mysql");

var connection = mysql.createConnection({
host: "localhost",
port: 3306,
user: "root",
password: "Reinaldo33!",
database: "burgers_db"
});

//Make a connection
connection.connect(function(err) {
    if (err) {
        console.error("Error connecting: " +err.stack);
        return
    }
    console.log('Connected as id: ' + connection.threadId);
});

module.exports = connection;