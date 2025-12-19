import express from "express";
import dotenv from "dotenv";
import { login } from "./handler/login.js";
import { connectDB } from "./db.js";

dotenv.config();
const app = express();
app.use(express.json());

await connectDB();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Server is running",
  });
});

app.post("/login", login);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
