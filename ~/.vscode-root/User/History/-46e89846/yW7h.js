import dashboardData from '../data/dashboardData.js';

export const getDashboardData = (req, res) => {
  res.status(200).json(dashboardData);
};
