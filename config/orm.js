//Import MySQL connection:
var connection = require("../config/connection.js");

var orm = {
    selectAll: function (cb) {
        var queryString = "SELECT * FROM burgers";
        conection.query(queryString, null, function (err, res) {
            if (err) throw err;
            cb(res);
        });
    },
    insertOne: function (burger_name, cb) {
        var burger = {
            burger_name = burger_name,
        }
        var queryString = "INSERT INTO burgers SET ?";
        console.log(queryString);
        connnection.query(queryString, burger, function (err, res) {
            if (err) throw err;
            cb(res);
        });
    },
    updateOne: function(burger_id, cb) {
        var burger = {
            id: burger_id
        };
        var devoured = {
            devoured: true
        };
        var queryString = "UPDATE burgers SET ? WHERE ?";
        console.log(queryString);
        connection.query(queryString,[devoured, burger], function (err, res) {
            if (err) return console.log(err);
            cb(res);
        });
    }
};

module.exports = orm;