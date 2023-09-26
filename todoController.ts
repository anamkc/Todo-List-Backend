import Todo from "./Todo";
import { Request, Response } from "express";

export const getAlltodos = (req: Request, res: Response) => {
  Todo.find({})
    .then((todos) => {
      res.status(200).json(todos);
    })
    .catch((err) => res.status(500).json(err));
};

export const createTodo = (req: Request, res: Response) => {
  const data = req.body;
  const { id, name, isCompleted } = data;
  try {
    const todo = new Todo({
      id,
      name,
      isCompleted,
    });
    todo.save();
    res.json("success");
  } catch (err) {
    console.log(err);
  }
};

export const updateTodo = (req: Request, res: Response) => {
  const id = req.params.id;
  const data = req.body;
  const { name, isCompleted } = data;
  Todo.findByIdAndUpdate(id, { name, isCompleted }, { new: true })
    .then(() => res.json("success"))
    .catch((err) => console.log(err));
};

export const deleteTodo = (req: Request, res: Response) => {
    const id = req.params.id;
    Todo.findByIdAndDelete(id)
    .then(() => res.json("success"))
    .catch((err) => console.log(err));
}
