const express = require("express");
const router = express.Router();

// Example data to return from the dashboard
const dashboardData = [
  {
    id: 1,
    title: "Active Users",
    desc: "Total number of active users",
    value: 150,
    icon: "👤", // Replace with actual icon or image if needed
  },
  {
    id: 2,
    title: "Active Calls",
    desc: "Total number of active calls",
    value: 50,
    icon: "📞", // Replace with actual icon or image if needed
  },
  // Add more items as needed
];

// Define the GET route for dashboard data
router.get("/", (req, res) => {
  res.json(dashboardData); // Return the dashboard data
});

module.exports = router; // Export the router
