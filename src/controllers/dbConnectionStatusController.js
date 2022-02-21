import mongoose from 'mongoose';

const dbConnectionStatusController = async (req, res) => {
  try {
    const dbConnection = await mongoose.connection.readyState;
    const status = { connectionStatus: dbConnection };

    res.send(status);
  } catch (error) {
    res.status(500).send(error);
  }
};

export { dbConnectionStatusController };
