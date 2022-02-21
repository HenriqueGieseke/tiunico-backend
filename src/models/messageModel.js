import mongoose from 'mongoose';

const messageSchema = mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

const messageModel = mongoose.model('messages', messageSchema);

export { messageModel };
