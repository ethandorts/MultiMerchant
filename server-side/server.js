import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import DatabaseConnection from './db.js';

const PORT = process.env.PORT || 3001;

DatabaseConnection();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.get('/', (req,res) => {
    res.send('Hello World');
})