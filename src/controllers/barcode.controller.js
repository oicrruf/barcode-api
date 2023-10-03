// const { createCanvas } = require("canvas");
// const Barcode = require("jsbarcode");

// const generateBarcode = (req, res, next) => {
//   let format = !req.query.format && "CODE128";
//   const canvas = createCanvas();
//   Barcode(canvas, req.params.code, {
//     format: format.toUpperCase(),
//     displayValue: true,
//     fontSize: 15,
//     textMargin: 10,
//   });
//   res.type("image/png");
//   const stream = canvas.createPNGStream();
//   stream.pipe(res);
// };

// module.exports = { generateBarcode };
