import dotenv from "dotenv";
dotenv.config(); // Load environment variables FIRST

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  console.error("❌ Error: MONGO_URI is undefined. Check your .env file.");
  process.exit(1);
}

// MongoDB Connection
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// Routes
app.use("/api/users", userRoutes);

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
