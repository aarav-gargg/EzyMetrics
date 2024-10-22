import mongoose from 'mongoose';

const campaignSchema = new mongoose.Schema({
  name: String,
  budget: Number,
});

export default mongoose.model('Campaign', campaignSchema);
