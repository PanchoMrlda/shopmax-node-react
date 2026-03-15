import express from "express";
import dotenv from "dotenv";
import connectDB from "@config/db.js";
import apiRoutes from "@routes/index.js";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Connect Database
connectDB();

// Use the central router
app.use("/api", apiRoutes);

const PORT = process.env.BACKEND_PORT || 5000;
app.listen(Number(PORT), "0.0.0.0", () => {
    console.log(`🚀 Server running on http://0.0.0.0:${PORT}`);
});
