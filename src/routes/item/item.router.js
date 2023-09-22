const express = require("express");
const { getItems, getItem } = require("../../controllers/item.controller");
const router = express.Router();


router.get("/", getItems);

router.get("/:id", getItem);

module.exports = router;
