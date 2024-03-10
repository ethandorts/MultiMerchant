import mongoose from 'mongoose';
import User from "../DatabaseModels/UserSchema.js";
import UserData from '../SeederData/users.js';

const SeedUserData = async () => {
    try {
        await User.insertMany(UserData);
        console.log('Data successfully seeded into the database');
    } catch (err) {
        console.log('Error seeding data: ', err);
    }
}

export default SeedUserData;