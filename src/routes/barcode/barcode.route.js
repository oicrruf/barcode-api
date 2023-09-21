const express = require("express");
const router = express.Router();
const generateBarcode = require("../../util/barcode");
const validate = require("../../../middleware/barcode");
const barcodeSchema = require("./barcode.validations");

router.get("/:code", validate(barcodeSchema), (req, res, next) => {
  generateBarcode(res, req.query.format, req.params.code);
});

module.exports = router;
