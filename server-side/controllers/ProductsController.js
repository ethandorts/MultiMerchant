import express from 'express';
import DatabaseConnection from '../db.js';

const GetAllProducts = (req, res) => {
    DatabaseConnection.query('SELECT * FROM products', (error, results) => {
     if(error) {
         console.error(error);
         return res.status(500).json({message: 'Could not retrieve all products'});
     } else {
         res.json(results);
     }
    });
 };

 const GetProductsByUserID = (req, res) => {
    const SellerID = req.params.userId;
    DatabaseConnection.query('SELECT * FROM products WHERE SellerID = ?', [SellerID], (error, results) => {
        if (error) {
            console.error(error);
            return res.status(500).json({ message: 'Could not retrieve products for this seller' });
        } 
        res.json(results);
    });
};

export { GetAllProducts, GetProductsByUserID };