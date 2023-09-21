const request = require("supertest");

const app = require("../app");

describe("health route", () => {
  let server = null;
  let api = null;

  beforeEach(() => {
    server = app.listen(8000);
    api = request(app);
  });

  test("GET /health exists", async () => {
    const response = await api.get("/health");
    expect(response).toBeTruthy();
  });

  test("GET /health status code 200", async () => {
    const response = await api.get("/health");
    expect(response.statusCode).toEqual(200);
  });

  test("GET /health message OK", async () => {
    const response = await api.get("/health");
    expect(response.body.message).toEqual("OK");
  });

  test("GET /health is a JSON", async () => {
    const response = await api.get("/health");
    expect(response.headers["content-type"]).toMatch(/json/);
  });

  afterEach(() => server.close());
});
