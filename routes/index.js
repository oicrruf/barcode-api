const express = require("express");
const router = express.Router();
const package = require("../package.json");

router.get("/", function (req, res, next) {
  const version = package.version;
  res.send({ version });
});

module.exports = router;
