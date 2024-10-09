const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())
app.use("/api", dashboardRoutes)




app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
