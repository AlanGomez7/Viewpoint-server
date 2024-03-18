import mongoose from "mongoose";

export default async function connect() {
  try {
    mongoose.connect(
      "mongodb+srv://alangomez0047:U2QQgEyUvVKEB9kn@cluster0.sgzx5mx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
      console.log("db connected");
  } catch (error) {
    console.log(error);
    process.exit(1)
  }
}
