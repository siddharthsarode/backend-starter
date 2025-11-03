import mongoose from "mongoose";

const connectToMongoDB = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URL);
		console.log("Connected to MongoDB successfully");
	} catch (err) {
		console.error("Error connecting to MongoDB:", err);
	}
};

export default connectToMongoDB;
