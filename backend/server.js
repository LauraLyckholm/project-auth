import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import { userRouter } from "./routes/userRouter";

const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/project-auth2";
mongoose.connect(mongoUrl);
mongoose.Promise = Promise;

// Defines the port the app will run on
const port = process.env.PORT || 8080;
const app = express();

// Add middlewares to enable cors and json body parsing
app.use(cors());
app.use(express.json());
app.use("/", userRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
