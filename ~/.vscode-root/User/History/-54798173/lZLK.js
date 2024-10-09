const express = require("express");
const router = express.Router();

// Define your routes here
router.get("/", (req, res) => {
  res.json({ message: "Dashboard data" });
});

module.exports = router; // Export the router
