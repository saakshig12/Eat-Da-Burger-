var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function (req, res) {
    burger.all(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        console.log("Got all burgers, now diplaying index");
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function (req, res) {
    console.log("router post entered");
    burger.insertOne([
        "burger_name", "devoured"
    ], [
            req.body.name, req.body.devoured
        ], function (result) {
            console.log("Inserted burger in db.")
            res.json({ id: result.insertId });
        });
});

module.exports = router;