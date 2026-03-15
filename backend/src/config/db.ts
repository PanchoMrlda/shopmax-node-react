import mongoose from "mongoose";

const connectDB = async (): Promise<void> => {
    try {
        const mongoURI = process.env.MONGO_URI || "mongodb://mongo:27017/shopmax";

        const conn = await mongoose.connect(mongoURI);

        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        if (error instanceof Error) {
            console.error(`Error: ${error.message}`);
        } else {
            console.error("An unknown error occurred during DB connection");
        }
        // Exit process with failure
        process.exit(1);
    }
};

process.on("SIGINT", async () => {
    await mongoose.connection.close();
    console.log("MongoDB connection closed due to app termination");
    process.exit(0);
});

export default connectDB;
