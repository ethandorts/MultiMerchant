import mongoose from 'mongoose';
import express from 'express';

const app = express();

// Function to establish database connection
const DatabaseConnection = async () => {;
    try {
        await mongoose.connect('mongodb+srv://ethandorts2002:Liverpool1@cluster0.8x8z89b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(`Database Successfully Connected`);
    } catch (err) {
        console.error(`Failed to connect to Database`, err);
    }
};
export default DatabaseConnection;
