const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const dashboardRoutes = require("./src/routes/dashboard"); // Ensure this path is correct
const orderRoutes = require("./src/routes/orders"); // New route for orders

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // Parses incoming requests with JSON payloads

// Routes
app.use("/api", dashboardRoutes); // Set up the dashboard routes
app.use("/api/orders", orderRoutes); // Set up the orders routes

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Error handling middleware (optional, but good practice)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});
