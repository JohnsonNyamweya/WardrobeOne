import mongoose from "mongoose";

const connectDB = async () => {

    mongoose.connection.on('connected', () => {
        console.log("DB connected");
    })

    mongoose.connection.on('error', (error) => {
        console.error("DB connection error", error);
    })

    await mongoose.connect(`${process.env.MONGODB_URI}/wardrobeone`);
        
}

export default connectDB;