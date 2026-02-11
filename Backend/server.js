import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();

/* =========================
   DYNAMIC CORS (FINAL FIX)
========================= */

app.use(cors({
  origin: function (origin, callback) {

    // Allow requests with no origin (Postman, mobile apps)
    if (!origin) return callback(null, true);

    // Allow any Netlify subdomain
    if (
      origin.includes("netlify.app") ||
      origin.includes("localhost")
    ) {
      return callback(null, true);
    }

    return callback(new Error("Not allowed by CORS"));
  },
  credentials: true
}));

app.use(express.json());

/* =========================
   ROUTES
========================= */

app.use("/api/auth", authRoutes);

/* =========================
   DATABASE CONNECTION
========================= */

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(process.env.PORT || 5000, () => {
      console.log(`Server running on port ${process.env.PORT || 5000}`);
    });
  })
  .catch(err => console.log(err));
