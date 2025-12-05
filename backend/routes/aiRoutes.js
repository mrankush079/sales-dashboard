// backend/routes/aiRoutes.js
import express from "express";
import axios from "axios";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/analyze", protect, async (req, res) => {
  const { userQuery, systemPrompt, useGrounding, title } = req.body;

  try {
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${process.env.GEMINI_API_KEY}`;

    const payload = {
      contents: [{ parts: [{ text: userQuery }] }],
      systemInstruction: { parts: [{ text: systemPrompt }] }
    };

    if (useGrounding) {
      payload.tools = [{ google_search: {} }];
    }

    const { data } = await axios.post(apiUrl, payload, {
      headers: { "Content-Type": "application/json" }
    });

    res.json(data);
  } catch (err) {
    console.error(err.response?.data || err.message);
    res.status(500).json({ message: "AI analysis failed" });
  }
});

export default router;
