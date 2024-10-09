const express = require("express");
const { ordersData } = require("../data/ordersData");
const router = express.Router();

// Get all orders
router.get("/", (req, res) => {
  res.json(ordersData);
});

// Add a new order
router.post("/", (req, res) => {
  const newOrder = req.body;
  newOrder.id = ordersData.length + 1; 
  ordersData.push(newOrder);
  res.status(201).json(newOrder);
});

// Edit an order by ID
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const updatedOrder = req.body;

  const index = ordersData.findIndex((order) => order.id === parseInt(id));
  if (index === -1) return res.status(404).json({ message: "Order not found" });

  ordersData[index] = { ...ordersData[index], ...updatedOrder };
  res.json(ordersData[index]);
});

// Delete an order by ID
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const index = ordersData.findIndex((order) => order.id === parseInt(id));
  if (index === -1) return res.status(404).json({ message: "Order not found" });

  const deletedOrder = ordersData.splice(index, 1);
  res.json(deletedOrder[0]);
});

module.exports = router;
