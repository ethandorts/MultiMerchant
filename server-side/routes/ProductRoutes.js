import express from 'express';
import { GetAllProducts, GetProductsByUserID } from '../controllers/ProductsController.js';

const ProductsRoutes = express.Router();

ProductsRoutes.get('/api/products/getAllProducts', GetAllProducts);
ProductsRoutes.get('/api/products/getProductsByUserID/:userId', GetProductsByUserID);

export default ProductsRoutes;