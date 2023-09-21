const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getItems = async (req, res, next) => {
  const items = await prisma.item.findMany();
  return res.status(200).json(items);
};

module.exports = { getItems };
