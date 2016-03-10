/// <reference path="./typings/tsd.d.ts" />
var express = require("express");
var bodyParser = require('body-parser');
var path = require('path');
var db = require('./db/db');
var app = express();
var port = process.env.PORT || 8000;
var Ipublic = path.resolve(__dirname, 'public');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.all('/*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
db.initializeApp(app);
app.get("/", function (req, res) {
    res.sendFile(Ipublic + "/index.html");
});
app.use(express.static(Ipublic));
app.listen(port, function () {
    console.log('App is in runnning mode on Port ' + port);
});
