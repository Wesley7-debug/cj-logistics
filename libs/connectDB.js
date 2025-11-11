import mongoose from "mongoose";

let isConnected = false; // track connection

export async function connectDB() {
  if (isConnected) {
    console.log("MongoDB already connected");
    return;
  }

  if (!process.env.MONGODB_URL) {
    throw new Error("Please define the MONGO_URI environment variable");
  }

  try {
    const db = await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
    console.log("MongoDB connected:", db.connection.host);
  } catch (err) {
    console.error("MongoDB connection error:", err);
    throw err;
  }
}
