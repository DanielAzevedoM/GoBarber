import mongoose from 'mongoose';

const NofitifcationSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  user: {
    type: Number,
    required: true,
  },
  read: {
    type: Boolean,
    required: true,
    default: false,
  },
});

export default mongoose.model('Notification', NofitifcationSchema);
