const express = require("express");
const router = express.Router();
const package = require("../../package.json");

router.get("/", (req, res, next) => {
  res.send({ version: package.version });
});

module.exports = router;
