import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";
import projectRoutes from "./routes/projectRoutes.js";
dotenv.config();


import uploadRoutes from "./routes/uploadRoutes.js";

import authRoutes from "./routes/authRoutes.js";
connectDB();

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/projects", projectRoutes);

app.use("/api/projects", projectRoutes);

app.use("/api/upload", uploadRoutes); 

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Portfolio API Running 🚀",
  });
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
