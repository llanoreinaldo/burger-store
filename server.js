//Depedencies
var express = require("express");
var bp = require("body-parser");

//Server Connection
var app = express();
var PORT = process.env.PORT || 8080

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

//Parse application/JSON
app.use(bodyParser.json());

//Makes public static folders available
app.use(express.static('public'));

//Imports express handlebars
var exphbs = require('express-handlebars')

//Set express to use handlebars
app.engine('handlebars', exphbs({defaultLayout: "main"}));
app.set('view engine', 'handlebars');

//Imports Routes

var routes = require('./controllers/burger_controller.js');

app.use(routes);

app.listen(PORT, function () {
    console.log('Listening on HTTP://localhost: ' + PORT);
});
