import mongoose from 'mongoose';
import dotenv from 'dotenv';
import UserData from '../SeederData/users.js';
import ProductData from '../SeederData/products.js'
import OrderData from '../SeederData/orders.js'
import Products from '../DatabaseModels/ProductsSchema.js'
import Users from '../DatabaseModels/UsersSchema.js';
import Order from '../DatabaseModels/OrdersSchema.js';
import DatabaseConnection from '../db.js';
import OrdersData from '../SeederData/orders.js';

dotenv.config();
DatabaseConnection();

const SeedData = async () => {
    try {
        await Users.insertMany(UserData);
        await Products.insertMany(ProductData);
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
        const userCount = await Users.countDocuments();
        const productCount = await Products.countDocuments();
        const ordersCount = await Order.countDocuments();
        if (userCount > 0 || productCount > 0 || ordersCount > 0)   {
            await Products.deleteMany();
            await Users.deleteMany();
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





