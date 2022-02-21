import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { messagesRouter } from './routes/messagesRouter.js';

(async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://giesekedev:devgieseke@cluster0.xm7me.mongodb.net/testMessageDb?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log('MongoDB connected');
  } catch (err) {
    console.log('MongoDB connection failure: ' + err);
  }
})();

const app = express();

app.use(cors());

app.use(express.json());

app.use(messagesRouter);

app.listen(5000, () => {
  console.log('API online');
});
