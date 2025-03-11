var express = require("express");
var app = express();

app.set("views", __dirname + "/apps/views");
app.set("view engine", "ejs");
app.use("/static", express.static(__dirname + "/public"));

var controller = require(__dirname + "/apps/controllers");
app.use(controller);
app.use("/static", express.static(__dirname + "/apps/public"));

var server = app.listen(3000, function() {
    console.log("Server is running");
});