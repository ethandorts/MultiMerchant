import express from 'express';
import DatabaseConnection from '../db.js';

const GetAllOrders = (req, res) => {
    DatabaseConnection.query('SELECT * FROM orders', (error, results) => {
        if (error) {
            console.error(error);
            return res.status(500).json({ message: 'Could not retrieve all orders' });
        }
        res.json(results);
    });
};

const GetOrderByID = (req, res) => {
    const OrderID = req.params.id; 
    DatabaseConnection.query('SELECT * FROM orders WHERE OrderID = ?', [OrderID], (error, results) => {
        if (error) {
            console.error(error);
            return res.status(500).json({ message: 'Order could not be found' });
        }
        if (!results.length) {
            return res.status(404).json({ message: 'Order was not found' });
        }
        res.json(results[0]);
    });
};

export { GetAllOrders, GetOrderByID };