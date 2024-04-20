import express from 'express';
import { GetAllOrders, GetOrderByID } from '../controllers/OrdersController.js';

const OrdersRoutes = express.Router();

OrdersRoutes.get('/api/orders/getAllOrders', GetAllOrders);
OrdersRoutes.get('/api/orders/getOrderByID/:id', GetOrderByID);

export default OrdersRoutes;