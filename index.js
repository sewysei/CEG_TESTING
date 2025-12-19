import express from "express";
import dotenv from "dotenv";
import { login } from "./handler/login.js";

dotenv.config();
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Server is running",
  });
});

app.post("/login", login);
