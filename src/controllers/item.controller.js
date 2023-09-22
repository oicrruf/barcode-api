const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getItems = async (req, res, next) => {
  const items = await prisma.item.findMany();
  return res.status(200).json(items);
};

const getItem = async (req, res, next) => {
  const item = await prisma.item.findUnique({
    where: {
      id: parseInt(req.params.id),
    },
  });
  return res.status(200).json(item);
};

module.exports = { getItems, getItem };
