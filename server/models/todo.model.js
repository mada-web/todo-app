import { DataTypes } from "sequelize";

import sequelize from "../sequalize/sequalize.js";

export const TodoModel = sequelize.define("Todo", {
  task: DataTypes.STRING,
  done: DataTypes.BOOLEAN,
  paranoid: DataTypes.BOOLEAN,
});
