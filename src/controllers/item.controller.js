const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllItems = async (req, res, next) => {
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

const editItem = async (req, res, next) => {
  const item = await prisma.item.updateMany({
    where: {
      id: parseInt(req.params.id),
    },
    data: req.body,
  });
  return res.status(204).json({ item });
};

const createItem = async (req, res, next) => {
  const item = await prisma.item.create({
    data: req.body,
  });
  return res.status(201).json(item);
};

const deleteItem = async (req, res, next) => {
  const item = await prisma.item.delete({
    where: {
      id: +req.params.id,
    },
  });
  return res.status(202).json(item);
};

module.exports = { getAllItems, getItem, editItem, createItem, deleteItem };
