const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const items = async () => {
  await prisma.item.upsert({
    where: { id: 1 },
    update: {},
    create: {
      code: "0000VLT820230899",
      name: "visualise loudly tell",
      detail:
        "summopere thesaurus synagoga pel arcus capto eius aut succedo coniuratio colo combibo",
      price: 496.61,
    },
  });
  await prisma.item.upsert({
    where: { id: 2 },
    update: {},
    create: {
      code: "0000BVU820230807",
      name: "bossy vaguely unethically",
      detail:
        "aestivus voluptates supellex doloribus catena surculus sperno volva vomer tempora",
      price: 941.17,
    },
  });
  await prisma.item.upsert({
    where: { id: 3 },
    update: {},
    create: {
      code: "0000NFT820230679",
      name: "natural from tasty",
      detail:
        "qui velum facilis tabesco comptus saepe succurro deludo ascit alias delectatio",
      price: 785.12,
    },
  });
  await prisma.item.upsert({
    where: { id: 4 },
    update: {},
    create: {
      code: "0000HCF820230654",
      name: "ha cautiously furthermore",
      detail:
        "cibo quisquam callide temptatio volutabrum allatus explicabo trucido utrum",
      price: 847.87,
    },
  });
  await prisma.item.upsert({
    where: { id: 5 },
    update: {},
    create: {
      code: "0000BSP820230575",
      name: "by since pace",
      detail: "confido pectus careo capitulus laboriosam vito adulatio",
      price: 52.09,
    },
  });
};
items()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

module.exports = items;
