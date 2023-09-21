const yup = require("yup");

const barcodeSchema = yup.object({
  params: yup.object({
    code: yup.string().min(8).max(16),
  }),
});

module.exports = barcodeSchema;
