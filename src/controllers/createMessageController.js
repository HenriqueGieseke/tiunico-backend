import { messageModel } from '../models/messageModel.js';

const createMessageController = async (req, res) => {
  try {
    const date = new Date();

    const newMessage = {
      date,
      message: req.body.message,
    };

    const message = new messageModel(newMessage);

    await message.save();
    res.status(201).send(message);
  } catch (error) {
    res.status(500).send(error);
  }
};

export { createMessageController };
