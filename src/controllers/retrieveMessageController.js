import { messageModel } from '../models/messageModel.js';

const retrieveMessageController = async (req, res) => {
  try {
    const messages = await messageModel.find();

    res.send(messages);
  } catch (error) {
    res.status(500).send(error);
  }
};

export { retrieveMessageController };
