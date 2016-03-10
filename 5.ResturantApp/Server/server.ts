/// <reference path="./typings/tsd.d.ts" />

import * as express from "express";
import * as bodyParser from 'body-parser';
import * as mongoose from 'mongoose';
import * as path from 'path';
let db = require('./db/db');

let app:express.Express = express();

let port: number  = process.env.PORT || 8000;

let Ipublic = path.resolve(__dirname,'public');

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());
app.all('/*', function(req, res, next) {
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

app.listen(port,()=>{
    console.log('App is in runnning mode on Port ' +port)
});


