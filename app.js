const createError = require("http-errors");
const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const router = require('./src/routes')

require("dotenv").config();

const app = express();
// const health = require("./src/routes/health.router");
// const barcodeRouter = require("./src/routes/barcode/barcode.router");

router(app)

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.use(function (req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  res.status(err.status || 500);
  res.send(typeof err == "string" ? { message: err } : err);
});

module.exports = app;
