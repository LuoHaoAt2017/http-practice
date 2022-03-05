const { Sequelize, DataTypes, UUIDV4 } = require("sequelize");
const config = require("../config");

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: "localhost",
    dialect: "mysql",
  }
);

const models = {};

const employe = sequelize.define(
  "Employe",
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: UUIDV4,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    // options
    sequelize: sequelize,
    createdAt: "created_time",
    updatedAt: "updated_time",
  }
);

models.Employe = employe;

(async function() {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ force: true });
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

module.exports = models;
