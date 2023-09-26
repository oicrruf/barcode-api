const express = require("express");
const {
  getAllItems,
  getItem,
  editItem,
  createItem,
  deleteItem,
} = require("../../controllers/item.controller");
const { validate } = require("../../validations/barcode.validations");
const barcodeSchema = require("../../validations/barcode.validations");
const router = express.Router();

router.get("/", getAllItems);
router.post("/",  createItem);
router.get("/:id", getItem);
router.patch("/:id", editItem);
router.delete("/:id", deleteItem);

module.exports = router;
