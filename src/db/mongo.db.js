import mongoose from "mongoose";
import config from "../config/config.js";

const connectToMongoDB = async () => {
	try {
		await mongoose.connect(config.MONGO_URL);
		console.log("Connected to MongoDB successfully");
	} catch (err) {
		console.error("Error connecting to MongoDB:", err);
	}
};

export default connectToMongoDB;
