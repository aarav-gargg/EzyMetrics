import mongoose from 'mongoose';

const leadSchema = new mongoose.Schema({
  name: String,
  status: String,
});

export default mongoose.model('Lead', leadSchema);