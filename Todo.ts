import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    id: {
      type: Number,
      required: true,
      unique: true
    },
    name: {
      type: String,
      required: true
    },
    isCompleted: {
      type: Boolean,
      default: false
    }
  });
  
  const Todo = mongoose.model('Todo', todoSchema);

  export default Todo;
  