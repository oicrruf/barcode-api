const {generateBarcode} = require("./barcode.controller");
const { getItems } = require("./item.controller");

module.exports = {
  generateBarcode,
  getItems,
};
