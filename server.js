var express = require("express");

var PORT = process.env.PORT || 4000;

var app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars"), exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

var routes = require("./controllers/burger_controllers.js");

app.use.listen(PORT,function(){
    console.log("App now listening at localhost:" + PORT);
})
