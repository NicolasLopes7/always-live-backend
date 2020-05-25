import mongoose from 'mongoose';

const SiteSchema = new mongoose.Schema({
  url: String,
  createdAt: String,
});

export default mongoose.model('Site', SiteSchema);
