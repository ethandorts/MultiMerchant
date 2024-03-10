import mongoose from 'mongoose';
import dotenv from 'dotenv';
import UserData from '../SeederData/users.js';
import ProductData from '../SeederData/products.js'
import OrderData from '../SeederData/orders.js'
import Product from '../DatabaseModels/ProductSchema.js'
import User from '../DatabaseModels/UserSchema.js';
import Order from '../DatabaseModels/OrdersSchema.js';
import DatabaseConnection from '../db.js';
import OrdersData from '../SeederData/orders.js';


dotenv.config();
DatabaseConnection();

const SeedData = async () => {
    try {
        await User.insertMany(UserData);
        await Product.insertMany(ProductData);
        await Order.insertMany(OrdersData);
        console.log('Data inserted into collections')
        process.exit();
    } catch (err) {
        console.log('Error:' , err)
        process.exit();
    }
}


const UpdateDatabase = async () => {
    try {
        const userCount = await User.countDocuments();
        const productCount = await Product.countDocuments();
        const ordersCount = await Order.countDocuments();
        if (userCount > 0 || productCount > 0 || ordersCount > 0)   {
            await Product.deleteMany();
            await User.deleteMany();
            await Order.deleteMany();

            console.log('Database data deleted');
        } else {
            console.log('No existing data in the database');
        }
        await SeedData();
    } catch (err) {
        console.log('Error:', err);
        process.exit();
    }
}

UpdateDatabase();





