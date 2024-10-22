import express from 'express';
import mongoose from 'mongoose';
import leadRoutes from './routes/leads.route.js';
import campaignRoutes from './routes/campaign.route.js';

const app = express();
const PORT = 5000;


app.use(express.json());


app.use('/api', leadRoutes);
app.use('/api', campaignRoutes);

mongoose.connect('mongodb://127.0.0.1:27017/ezyMetrics')
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Database connection error:', err);
  });
