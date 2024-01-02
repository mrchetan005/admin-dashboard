import mongoose from "mongoose";

const connection = { isConnected: 0 };
export const connectDB = async () => {
    try {
        if (connection.isConnected) {
            return;
        }
        const url = process.env.NODE_ENV === 'production' ? process.env.MONGODB_URI : "mongodb://127.0.0.1:27017/dashboard";
        const db = await mongoose.connect(url);
        connection.isConnected = db.connections[0].readyState;
    } catch (error) {
        throw new Error(error);
    }
}