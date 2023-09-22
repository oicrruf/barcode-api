const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const items = require("./data/items.json");

async function main() {
  for (const { id, code, name, detail, price } of items) {
    await prisma.item.upsert({
      where: { id: id },
      update: {},
      create: {
        id,
        name,
        code,
        detail,
        price,
      },
    });
  }
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
