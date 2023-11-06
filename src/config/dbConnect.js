import mongoose from "mongoose";
import "dotenv/config";

async function connectDatabase() {
  mongoose.connect(process.env.MONGO_DB);

  return mongoose.connection;
}

export default connectDatabase;
