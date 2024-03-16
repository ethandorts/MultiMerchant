import express from 'express';
import { getAllOrders } from '../controllers/OrdersController.js';

const OrdersRoutes = express.Router();

OrdersRoutes.get('/orders/getAllOrders', getAllOrders);


export default OrdersRoutes;