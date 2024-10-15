import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authenRoutes from "./routes/authen.route.js";

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("MongoDB is connected.");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
app.use(express.json()); // this allow json as the input of backend

app.use("/api/user", userRoutes);
app.use("/api/authen", authenRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});
