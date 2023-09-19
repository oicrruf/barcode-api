const express = require("express");
const router = express.Router();

router.get("/:code", function (req, res, next) {
  const code = req.params.code;
  res.send({ code });
});

module.exports = router;
