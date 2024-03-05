import express from 'express';
import mongoose from 'mongoose';

const DATABASE_URI = process.env.DATABASE_URI;

const app = express();

export const DatabaseConnection = async () => {
    mongoose.connect(process.env.DATABASE_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log(`Database Successfully Connected`)
    }).catch(((err) => {
        console.log(`Failed to connect to Database`, err)
    }))
}

export default DatabaseConnection;