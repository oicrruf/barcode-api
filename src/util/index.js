const { faker } = require("@faker-js/faker");

const generateCode = (name) => {
  let code = "";
  let year = new Date().getFullYear().toString();
  let month = new Date().getMonth().toString();
  let random = Math.floor(Math.random() * 999).toString();

  name
    .trim()
    .split(" ")
    .map((l) => {
      code += l[0];
    });

  code = code + month + year + random.padStart(4, 0);
  code = code.padStart(16, 0);

  return code.toUpperCase();
};

const fakeItem = () => {

  return {
    name: `${faker.word.sample()} ${faker.word.sample()} ${faker.word.sample()}`,
    detail: faker.lorem.words({min: 6, max: 12}),
    price: faker.number.float({ min: 49.99, max: 999.99, precision: 0.01 }),
  };
};

module.exports = { generateCode, fakeItem };
