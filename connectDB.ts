import mongoose from "mongoose";
const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URL!)
    .then(() => console.log("DB Connected"))
    .catch((err) => console.log(err));
};

export default connectDB;
