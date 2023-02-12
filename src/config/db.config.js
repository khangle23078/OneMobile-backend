import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(process.env.MONGO_URL, {
      dbName: "OneMobile",
      autoIndex: true,
    });
    console.log("Connect db success!!");
  } catch (error) {
    console.error(error);
  }
};
