const request = require("supertest");

const app = require("../app");

describe("check barcode route", () => {
  let server = null;
  let api = null;

  beforeEach(() => {
    server = app.listen(3000);
    api = request(app);
  });

  test("GET /barcode exists", async () => {
    const response = await api.get("/barcode/00000000");
    expect(response).toBeTruthy();
  });

  test("GET /barcode status code 200", async () => {
    const response = await api.get("/barcode/00000000");
    expect(response.statusCode).toEqual(200);
  });

  test("GET /barcode is a PNG", async () => {
    const response = await api.get("/barcode/00000000");
    expect(response.headers["content-type"]).toMatch(/png/);
  });

  test("GET /barcode not found if without params", async () => {
    const response = await api.get("/barcode");
    expect(response.statusCode).toEqual(404)
  });

  test("GET /barcode with invalid characters", async () => {
    const response = await api.get("/barcode/00000000*");
    expect(response.statusCode).toEqual(500)
    expect(response.body.message).toMatch(/is not a valid input/)
  });

  // DTO testing
  test("GET /barcode code not must be at most 16 characters", async () => {
    const response = await api.get("/barcode/00000000000000000");
    expect(response.statusCode).toEqual(500)
  });

  test("GET /barcode code must be at least 8 characters", async () => {
    const response = await api.get("/barcode/0000");
    expect(response.statusCode).toEqual(500)
  });

 

  afterEach(() => server.close());
});
