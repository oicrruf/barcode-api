require('../config')
const request = require("supertest");
const app = require("../app");

describe("barcode route", () => {
  let server = null;
  let api = null;

  beforeEach(() => {
    server = app.listen(process.env.PORT);
    api = request(app);
  });

  test("GET /api/v1/barcode exists", async () => {
    const response = await api.get("/api/v1/barcode/00000000");
    expect(response).toBeTruthy();
  });

  test("GET /api/v1/barcode status code 200", async () => {
    const response = await api.get("/api/v1/barcode/00000000");
    expect(response.statusCode).toEqual(200);
  });

  test("GET /api/v1/barcode is a PNG", async () => {
    const response = await api.get("/api/v1/barcode/00000000");
    expect(response.headers["content-type"]).toMatch(/png/);
  });

  test("GET /api/v1/barcode not found if without params", async () => {
    const response = await api.get("/api/v1/barcode");
    expect(response.statusCode).toEqual(404)
  });

  // DTO testing
  test("GET /api/v1/barcode code not must be at most 16 characters", async () => {
    const response = await api.get("/api/v1/barcode/00000000000000000");
    expect(response.statusCode).toEqual(500)
  });

  test("GET /api/v1/barcode code must be at least 8 characters", async () => {
    const response = await api.get("/api/v1/barcode/0000");
    expect(response.statusCode).toEqual(500)
  });

 

  afterEach(() => server.close());
});
