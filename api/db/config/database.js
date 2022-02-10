require("dotenv").config();
const password = process.env.PASSWORD;
const userName = process.env.USER_NAME;
const db = process.env.DB;

const options = {
  development: {
    username: userName,
    password: password,
    database: db,
    host: "127.0.0.1",
    dialect: "postgres",
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};

module.exports = options;
