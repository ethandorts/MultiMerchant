import mongoose from 'mongoose';
import Orders from '../DatabaseModels/OrdersSchema.js';

const getAllOrders = async (req , res) => {
    try {
    const Orders = Orders.find();
    res.json(Orders);
    } catch (err) {
        res.status(500).json({message: "Couldn't find all the orders"});
    }
}

export { getAllOrders };