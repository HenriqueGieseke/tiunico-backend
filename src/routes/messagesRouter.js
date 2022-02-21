import express from 'express';
import { createMessageController } from '../controllers/createMessageController.js';
import { retrieveMessageController } from '../controllers/retrieveMessageController.js';

const router = express.Router();

router.get('/getMessages', retrieveMessageController);
router.post('/addMessage', createMessageController);

export { router as messagesRouter };
