
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const items = async () => {
  await prisma.item.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      code: "0000000000IP1291",
      name: "iPad Pro 12.9",
      detail: "MNXP3LL/A",
      price: 1149.0,
    },
  });
  await prisma.item.upsert({
    where: { id: 2 },
    update: {},
    create: {
      id: 2,
      code: "00000000000IP152",
      name: "iPhone 14 Pro",
      detail: "MQ023BE/A",
      price: 1310.0,
    },
  });
  await prisma.item.upsert({
    where: { id: 3 },
    update: {},
    create: {
      id: 3,
      code: "00000000000AWSE3",
      name: "Apple Watch SE 8",
      detail: "A2723",
      price: 219.99,
    },
  });
  await prisma.item.upsert({
    where: { id: 4 },
    update: {},
    create: {
      id: 4,
      code: "000000000000HPM4",
      name: "Home Pod Mini",
      detail: "MY5G2LL/A",
      price: 94.99,
    },
  });
  await prisma.item.upsert({
    where: { id: 5 },
    update: {},
    create: {
      id: 5,
      code: "00000000000IP129",
      name: "Apple TV",
      detail: "MN873LL/A",
      price: 124.99,
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
