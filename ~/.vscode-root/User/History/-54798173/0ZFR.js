const express = require("express");
const router = express.Router();

const dashboardData = [
    {
      id: 1,
      title: "Active Users",
      desc: "Total number of active users",
      value: 150,
      icon: "👤", 
    },
    {
      id: 2,
      title: "Active Calls",
      desc: "Total number of active calls",
      value: 50,
      icon: "📞", 
    },
    {
      id: 3,
      title: "Total Revenue",
      desc: "Total revenue generated this month",
      value: "$20,000",
      icon: "💰", 
    },
    {
      id: 4,
      title: "New Signups",
      desc: "Total new signups this week",
      value: 75,
      icon: "📝", 
    },
    {
      id: 5,
      title: "Monthly Visitors",
      desc: "Total visitors in the last month",
      value: 5.000,
      icon: "🌐", 
    },
    {
      id: 6,
      title: "Churn Rate",
      desc: "Percentage of users who left this month",
      value: "5%",
      icon: "📉", 
    },
    {
      id: 7,
      title: "Customer Satisfaction",
      desc: "Current customer satisfaction score",
      value: "90%",
      icon: "😊", 
    },
    {
      id: 8,
      title: "Total Sales",
      desc: "Total number of sales this month",
      value: 300,
      icon: "🛒", 
    },
    {
      id: 9,
      title: "Support Tickets",
      desc: "Total open support tickets",
      value: 12,
      icon: "🛠️", 
    },
    {
      id: 10,
      title: "Daily Active Users",
      desc: "Users who logged in today",
      value: 120,
      icon: "👥", 
    },
    {
      id: 11,
      title: "Email Engagement",
      desc: "Percentage of users engaging with emails",
      value: "30%",
      icon: "📧", 
    },
    {
      id: 12,
      title: "Conversion Rate",
      desc: "Percentage of visitors who converted",
      value: "10%",
      icon: "📈", 
    },
    {
      id: 13,
      title: "Inventory Levels",
      desc: "Total items in stock",
      value: 1.200,
      icon: "📦", 
    },
    {
      id: 14,
      title: "Social Media Reach",
      desc: "Total followers across all platforms",
      value: 10.500,
      icon: "📱", 
    },
    {
      id: 15,
      title: "Website Load Time",
      desc: "Average load time in seconds",
      value: "2.5s",
      icon: "⏳", 
    },
    {
      id: 16,
      title: "Ad Spend",
      desc: "Total spend on advertising this month",
      value: "$5,000",
      icon: "📊", 
    },
  ];
  
router.get("/", (req, res) => {
  res.json(dashboardData); // Return the dashboard data
});

module.exports = router; // Export the router
