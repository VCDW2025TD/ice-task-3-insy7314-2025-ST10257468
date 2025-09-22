import express from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
dotenv.config();
const app = express();
export default app;

// Security middlewares
app.use(helmet());
app.use(
  cors({
    origin: "https://localhost:5173",
    credentials: true,
  })
);
app.use(express.json()); // Parse JSON bodies
// Routes
const authRoutes = require("./routes/authRoutes");
const { protect } = require("./middleware/authMiddleware");
app.use("/api/auth", authRoutes);
// Example protected route
app.get("/api/protected", protect, (req, res) => {
  res.json({
    message: "Welcome, user ${req.user.id}!",
    timestamp: new Date(),
  });
});
module.exports = app;
