import express from 'express';
import mongoose from 'mongoose';
import Products from '../DatabaseModels/ProductsSchema.js';

const getAllProducts = async (req , res) => {
    try {
        const Products = await Products.find();
        res.json(Products);
    } catch (err) {
        res.status(401).json({message: "Couldn't retrieve all the products"});
    }
}

const getProductById = async (req , res) => {
    try {
        const Product = await Product.find(req.params._id)
    } catch {

    }
}

export { getAllProducts };