const express = require("express");
const { default: dashboardData } = require("../data/dashboardData");
const router = express.Router();


  
router.get("/", (req, res) => {
  res.json(dashboardData); 
});

module.exports = router; 
