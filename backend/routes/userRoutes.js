import express from "express";
import User from "../models/User.js";

const router = express.Router();

// POST request to save user name
router.post("/", async (req, res) => {
  try {
    const { name } = req.body;
    const newUser = new User({ name });
    await newUser.save();
    res.json({ message: "User name saved successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
});

export default router;
