import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import DatabaseConnection from './db.js';
import UsersRoutes from './routes/UsersRoutes.js'
import ProductsRoutes from './routes/ProductRoutes.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';


const PORT = process.env.PORT || 5000;

DatabaseConnection();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());
app.use(UsersRoutes);
app.use(ProductsRoutes);

app.use(cors({
    origin: 'http://localhost:3000'
}));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.get('/', (req,res) => {
    res.send('Hello World');
})


