const env = process.env.NODE_ENV || "dev";

const envs = {
  dev: ".env",
  e2e: ".env.e2e",
};

const options = {};

if (envs[env]) {
  options.path = envs[env];
}

require("dotenv").config(options);

const config = {
  env,
  port: process.env.PORT,
  database: process.env.DATABASE_URL,
};

module.exports = { config };
