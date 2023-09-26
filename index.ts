import express from "express";
import dotenv from "dotenv";
import connectDB from "./connectDB";
import router from "./routes";
dotenv.config()

const app = express();
connectDB();
app.use(express.json())

app.use("/", router);

app.listen(5000, () => {
  console.log("Server running at https://localhost:5000");
});
