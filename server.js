import express from "express";
import dotenv from "dotenv";
import connectDatabase from "./config/connectionDB.js";
import { User } from "./registerModels.js";
const app = express();
dotenv.config({ path: "./config/config.env" });
app.use(express.json());

app.post("/api/register", async (req, res) => {
  const { name, email, phoneno, address, comments } = await User.create(
    req.body
  );
  res.status(201).json({
    success: true,
    message: `Your Mesaage ${name} has been sent`,
    email,
    phoneno,
    address,
    comments,
  });
});
connectDatabase();
app.listen(process.env.PORT, () => {
  console.log(`Server is working On : ${process.env.PORT}`);
});
