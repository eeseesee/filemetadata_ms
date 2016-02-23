"use strict";

var express = require("express"),
    routes = require("./app/routes/router.js");

var app = express();

app.use("/public", express.static(process.cwd() + "/public"));
app.use("/controllers", express.static(process.cwd() + "/app/controllers"));

routes(app);

var port = process.env.PORT || 5000;
app.listen(port,function(){
  console.log("Listening on port "+port+"...")
});
