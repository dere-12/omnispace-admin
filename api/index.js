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
app.use(express.json()); // this allows json as the input of backend

app.use("/api/user", userRoutes); // test
app.use("/api/authen", authenRoutes); // sign up and sign in

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});
