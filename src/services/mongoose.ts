import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

connectDb().catch((err) => console.log(err));

async function connectDb() {
  const options = {
    autoIndex: false,
    maxPoolSize: 10,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
    family: 4,
  };
  await mongoose.connect(process.env.MONGO_URL as string, options).then(() => {
    console.log("Client connected");
  });
}

export default connectDb;
