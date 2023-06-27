const mongoose = require("mongoose");
const URI =
  "mongodb+srv://Gossip:Hub710@cluster0.pu4wwoz.mongodb.net/?retryWrites=true&w=majority";

const connectDB = async () => {
  try {
    await mongoose.connect(URI, {
      useUnifiedTopology: true,
    });
    console.log(`MongoDB connected: ${mongoose.connection.host}`);
  } catch (err) {
    console.log(`Error: ${err.message}`);
  }
};

module.exports = connectDB;
