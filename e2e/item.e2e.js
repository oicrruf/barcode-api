require('../config')
const app = require("../app");
const request = require("supertest");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

describe("item route", () => {
  let server = null;
  let api = null;

  beforeEach(() => {
    server = app.listen(process.env.PORT);
    api = request(app);
  });

  test("GET /api/v1/item exists", async () => {
    const response = await api.get("/api/v1/item");
    expect(response).toBeTruthy();
  });

  test("GET /api/v1/item status code 200", async () => {
    const response = await api.get("/api/v1/item");
    expect(response.statusCode).toEqual(200);
  });

  test("GET /api/v1/item should return some items", async () => {
    const item = await prisma.item.findUnique({
      where: {
        id: 1
      },
    });
    const response = await api.get(`/api/v1/item/${item.id}`);
    expect(response.body.id).toEqual(1);
  });

  afterEach(() => server.close());
});
