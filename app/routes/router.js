"use strict";

var multer = require("multer");
var upload = multer();

var ServiceHandler = require(process.cwd()+"/app/controllers/serviceHandler.server.js");

module.exports = function (app) {
  var serviceHandler = new ServiceHandler();

  app.route("/")
    // return the main page
    .get(function(req,res){
      res.sendFile(process.cwd()+'/public/index.html')
    });

  app.route("/fileanalyze/")
  	.post(upload.single("inputFile"), serviceHandler.analyzeFile);

}
