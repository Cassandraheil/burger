var express = require("express");
var router = express.Router();

var burgerJS = require("../models/burgers");


router.get("/", function (req, res) {
    burgerJS.selectAll(function (data) {
        var object = {
            burgers: data
        };
        console.log(object);
        res.render("index", object);
    });
});

router.post("/api/burgers", function (req, res) {
    console.log("post route", req.body)

    burgerJS.insertOne(
        req.body.burger_name,

     function (result) {
        // Send back the ID of the new quote
        res.redirect("/");
    });
});

router.put("/api/burgers/:id", function (req, res) {
    var id = "id = " + req.params.id;

    console.log("actually id", id);

    burgerJS.updateOne({
        devoured: req.body.devoured,
        id: id
    }, function (result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});


module.exports = router;