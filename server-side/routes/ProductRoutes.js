import express from 'express';
import { getAllProducts } from '../controllers/ProductsController.js';

const ProductsRoutes = express.Router();

ProductsRoutes.get('/products/getAllProducts', getAllProducts);


export default ProductsRoutes;