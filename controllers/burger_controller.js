//Declare Dependencies
var express = require('express');
var burger = require('../models/burger.js');

//Set Express Router
var router = express.Router();

//Define Routes 
router.get('/', function (req, res) {
    burger.all(function (data) {
        var handlebarsObj = {
            burgers: data
        };
        res.render('index', handlebarsObj);
    });
});


router.post('/api/new', function (req, res) {
    var name = req.body.burger_name
    if (name) {
        burger.create(name, function (data) {
            res.redirect("/");
        });
    };
});

router.post('/api/devour', function (req, res) {
    var id = req.body.burger_id;
    burger.update(id, function (data) {
        res.json(200);
    });
});

module.exports = router;