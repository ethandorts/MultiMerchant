import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import DatabaseConnection from './db.js';
import UsersRoutes from './routes/UsersRoutes.js'
import ProductsRoutes from './routes/ProductRoutes.js';

const PORT = process.env.PORT || 3001;

DatabaseConnection();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(UsersRoutes);
app.use(ProductsRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.get('/', (req,res) => {
    res.send('Hello World');
})


