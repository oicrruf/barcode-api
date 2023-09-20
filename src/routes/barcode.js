const express = require("express");
const router = express.Router();
const generateBarcode = require("../util/barcode");

router.get("/:code", function (req, res, next) {
  generateBarcode(res, req.query.format, req.params.code);
});

module.exports = router;
