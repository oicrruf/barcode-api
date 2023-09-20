const { createCanvas } = require("canvas");
const Barcode = require("jsbarcode");

const generateBarcode = (res, format = "CODE39", code) => {
  const canvas = createCanvas();
  Barcode(canvas, code, {
    format: format,
    displayValue: true,
    fontSize: 15,
    textMargin: 10,
  });
  res.type("image/png");
  const stream = canvas.createPNGStream();
  stream.pipe(res);
};

module.exports = generateBarcode;
