import express from "express";
import { getAlltodos, createTodo, updateTodo, deleteTodo } from "./todoController";

const router = express.Router();

router.get("/", getAlltodos);
router.post("/", createTodo);
router.put("/:id", updateTodo);
router.delete("/:id", deleteTodo)

export default router;