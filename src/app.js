
import express from 'express';
import mongoose from 'mongoose';
import { createServer } from "node:http";
import userRoute from './routes/users.routes.js';
import { connectToSocket } from './controllers/socketManager.js';
import cors from 'cors';

const app = express();
const server = createServer(app);
const io = connectToSocket(server);

app.set("port", process.env.PORT || 8000);

app.use(cors());
app.use(express.json({ limit: '40kb' }));
app.use(express.urlencoded({ limit: '40kb', extended: true }));

// API routes
app.use('/api/v1/users', userRoute);

// DB + Server start
const start = async () => {
  try {
    const connectionDb = await mongoose.connect(
      "mongodb+srv://shahanacs2003_db_user:Shahana%407000@cluster0.ifrz707.mongodb.net/video_conference-platform"
    );
    console.log(`✅ MongoDB connected: ${connectionDb.connection.host}`);

    server.listen(app.get("port"), () => {
      console.log(`🚀 Server running on port ${app.get("port")}`);
    });
  } catch (err) {
    console.error("❌ MongoDB connection failed", err);
    process.exit(1);
  }
};

start();
