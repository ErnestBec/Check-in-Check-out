const { Sequelize, DataTypes } = require("sequelize");

const db = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  username: "postgres",
  password: "admin",
  port: 5432,
  database: "Check-in_Check-out",
  logging: false,
});

module.exports = { db, DataTypes };
