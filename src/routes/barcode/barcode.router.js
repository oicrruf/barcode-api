const express = require("express");
const router = express.Router();
const validate = require("../../middleware/barcode");
const barcodeSchema = require("../../validations/barcode.validations");
// const { generateBarcode } = require("../../controllers");

// router.get("/:code", validate(barcodeSchema), generateBarcode);

module.exports = router;
