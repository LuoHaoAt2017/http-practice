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

const User = sequelize.define(
  "User",
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
    sequelize: sequelize,
    createdAt: "created_time",
    updatedAt: "updated_time",
    freezeTableName: true, // 停止 Sequelize 执行自动复数化。 Sequelize 将推断表名称等于模型名称,而无需进行任何修改。
  }
);

models.User = User;

(async function () {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ force: false });
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

module.exports = models;
