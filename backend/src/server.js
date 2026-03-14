import express from "express";
import routes from "./routes/index.js";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import createWebSocketServer from "./ws.js";
import http from "http";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", routes);

mongoose.connect(process.env.MONGO_URI || `mongodb://localhost:27018/shopmax`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
    .catch(err => console.error("MongoDB connection error:", err));

const server = http.createServer(app);
createWebSocketServer(server);

const PORT = process.env.BACKEND_PORT || 5000;
server.listen(PORT, () => {
    console.log(`Backend running on port ${PORT}`);
});
