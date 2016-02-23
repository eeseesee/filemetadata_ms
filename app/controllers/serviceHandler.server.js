"use strict";

function ServiceHandler () {

	this.analyzeFile = function (req, res) {

    if(!req.file){
			return res.json({});
		}
		res.json({
      filename: req.file.originalname,
      fileSize: req.file.size,
			encoding: req.file.encoding,
			mimetype: req.file.mimetype
    });
  }

}

module.exports = ServiceHandler;
