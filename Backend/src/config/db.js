import mongoose from 'mongoose';
import "dotenv/config";

const connectDB = async () => {
    try {
        mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected Successfully...`);
    } catch (error) {
        console.log("Failed to connect DB", error.message);
        process.exit(1);
    }
};

export default connectDB;