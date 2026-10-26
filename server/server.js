import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";

connectDB();

const app = express();
app.use(cors({ origin: "http://localhost:5173" })); // Vite ka default port
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/cart", cartRoutes);

app.get("/", (req, res) => res.send("API running"));

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`),
);
