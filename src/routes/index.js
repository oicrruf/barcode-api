const healthRouter = require('./health.router');
const itemRouter = require('./item/item.router');
const barcodeRouter = require('./barcode/barcode.router');

const router = (app) => {
  app.use('/health', healthRouter);
  app.use('/api/v1/item', itemRouter);
  app.use('/api/v1/barcode', barcodeRouter);
};

module.exports = router;