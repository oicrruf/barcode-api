require("../config");
const app = require("../app");
const request = require("supertest");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const {fakeItem} = require("../src/util")

describe("item route", () => {
  let server = null;
  let api = null;
  let allItems = [];

  beforeEach(() => {
    server = app.listen(process.env.PORT);
    api = request(app);
  });

  test("POST /api/v1/item create some items", async () => {
    const item = fakeItem()
    const response = await api.post(`/api/v1/item`).send(item);
    expect(response.body.name).toMatch(item.name);
    expect(response.statusCode).toEqual(201);
  });

  test("GET /api/v1/item all items", async () => {
    const response = await api.get("/api/v1/item");
    const items = await prisma.item.findMany();
    allItems = items;
    expect(response.body.length).toEqual(items.length);
    expect(response.statusCode).toEqual(200);
  });

  test("GET /api/v1/item should return some items", async () => {
    const id = allItems.map((item) => item.id);
    const item = await prisma.item.findUnique({
      where: {
        id: id[0],
      },
    });
    const response = await api.get(`/api/v1/item/${item.id}`);
    expect(response.body.id).toEqual(id[0]);
    expect(response.statusCode).toEqual(200);
  });

  test("PATH /api/v1/item edit some items", async () => {
    const id = allItems.map((item) => item.id);
    const item = fakeItem()
    const response = await api.patch(`/api/v1/item/${id[1]}`).send(item);
    expect(response.body).toEqual({});
    expect(response.statusCode).toEqual(204);
  });

  test("DELETE /api/v1/item delete some item", async () => {
    const id = allItems.map((item) => item.id);
    const response = await api.delete(`/api/v1/item/${id[0]}`);
    expect(response.statusCode).toEqual(202);
  });

  afterEach(() => server.close());
});
