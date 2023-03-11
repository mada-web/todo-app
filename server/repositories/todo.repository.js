import { TodoModel } from "../models/todo.model.js";

export const createOne = async (data) => {
  return await TodoModel.create({
    task: data.task,
    done: false,
    paranoid: false,
  });
};

const getAllToDos = async () => {
  return await TodoModel.findAll();
};
