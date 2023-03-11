import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  "postgres://postgres:12345@localhost:5432/postgres"
);

try {
  console.log("Trying to connect to the database...");
  await sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

export default sequelize;
