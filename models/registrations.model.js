const { db, DataTypes } = require("../utils/database.util");

const Registration = db.define("registration", {
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  entranceTime: {
    type: DataTypes.DATE,
  },
  exitTie: {
    type: DataTypes.DATE,
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: "working",
  },
});
module.exports = { Registration };
