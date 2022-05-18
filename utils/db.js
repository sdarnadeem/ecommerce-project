import mongoose from "mongoose";

export default async function connectToDatabase() {
  const DB = process.env.NEXT_PUBLIC_MONGODB_URL;
  const client = mongoose.connect(`${DB}`);

  return client;
}
