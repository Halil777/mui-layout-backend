import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import dashboardRoutes from './src/routes/dashboard.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/api', dashboardRoutes); // Use the dashboard routes

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
