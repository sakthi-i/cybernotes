import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const letsConnect = await mongoose.connect("mongodb://localhost:27017/cyber", {
      useNewUrlParser: true,
    });
    console.log(`MongoDB is connected`);
  } catch (err) {
    console.log(`MongoDB Error : ${err.message}`);
    process.exit();
  }
};