const request = require("supertest");

const app = require("../app");

describe("check health route", () => {
  let server = null;
  let api = null;

  beforeEach(() => {
    server = app.listen(3000);
    api = request(app);
  });

  test("GET /barcode exists", async () => {
    const response = await api.get("/barcode/2472400872");
    expect(response).toBeTruthy();
  });

  test("GET /barcode status code 200", async () => {
    const response = await api.get("/barcode/2472400872");
    expect(response.statusCode).toEqual(200);
  });

  test("GET /barcode is a PNG", async () => {
    const response = await api.get("/barcode/2472400872");
    expect(response.headers["content-type"]).toMatch(/png/);
  });

  afterEach(() => server.close());
});
