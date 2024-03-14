import express from 'express';
import mongoose from 'mongoose';
import Users from '../DatabaseModels/UsersSchema.js';

const GetAllUsers = async (req, res) => {
    try {
    const AllUsers =  await Users.find();
    res.json(AllUsers);
    } catch (err) {
        console.error(err);
        res.status(500).json({message: 'Could not retrieve all users'});
    }
}

const GetUserById = async (req, res) => {
    try {
        const User = await Users.findById(req.params._id);
        res.json(User);
        if(!User) {
            res.status(401).json({message: 'User does not exist. Could not retrieve'})
        }
    } catch (err) {
        res.status(500).json({message: 'User could not be found'})
    }
}

export { GetAllUsers, GetUserById };