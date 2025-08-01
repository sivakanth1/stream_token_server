import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import { StreamChat } from 'stream-chat';

// ✅ Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const serverClient = StreamChat.getInstance(
  process.env.STREAM_API_KEY,
  process.env.STREAM_API_SECRET
);

app.use(bodyParser.json());

app.post('/get-stream-token', (req, res) => {
  const { uid } = req.body;
  const authHeader = req.headers.authorization;

  if (authHeader !== `Bearer ${process.env.AUTH_SECRET}`) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  if (!uid) {
    return res.status(400).json({ error: 'Missing uid' });
  }

  const token = serverClient.createToken(uid);
  return res.json({ token });
});

app.listen(port, '0.0.0.0', () => {
  console.log(`✅ Server running on http://0.0.0.0:${port}`);
});