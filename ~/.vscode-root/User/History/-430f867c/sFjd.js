const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 
app.get("/", (req, res) => {
  res.send("Welcome to the Orders API!");
});




app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
