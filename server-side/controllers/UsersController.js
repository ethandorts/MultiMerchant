import dotenv from 'dotenv';
dotenv.config();
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import express from 'express';
import mongoose from 'mongoose';
import Users from '../DatabaseModels/UsersSchema.js';
import GenerateToken from '../authentication/GenerateToken.js';

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

const CreateNewUser = async (req , res) => {
    const { FirstName, Surname, Address, DOB, Email, Username, Password, ApplicationAdmin } = req.body;
    try {
        const existingUser = await Users.findOne({ Email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists in the application" });
        }

        const UserCreated = await Users.create({
            FirstName,
            Surname,
            Address,
            DOB,
            Email,
            Username,
            Password, 
            ApplicationAdmin
        });
        GenerateToken(res, UserCreated._id);
        return res.status(201).json({ message: 'User successfully created' });
    } catch (error) {
        console.error("Error creating user:", error);
        return res.status(500).json({ message: "Failed to create user" });
    }
}

const UserLogin = async (req, res) => {
    try {
        const { Email, Password } = req.body;
        const user = await Users.findOne({ Email });

        if (!user) {
            return res.status(401).json({ message: "Invalid Email or Password entered!" });
        }
        
        const passwordIsCorrect = await bcrypt.compare(Password, user.Password);
       
        if (!passwordIsCorrect) {
            return res.status(401).json({ message: "Invalid password entered!" });
        }
        
        GenerateToken(res, user._id);
        res.status(201).json({message: "User successfully logged in" });
        
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ message: "User unsuccessfully logged in" });
    }
};

const UserLogout = async ( req, res ) => {
    try {
    res.cookie('auth_token', '', {
        httpOnly: true,
        expires: new Date(0)
    });
    res.status(200).json({message: "User successfully logged out"});
} catch (err) {
    console.error("Error logging out:", err);
    res.json({message: "User unsuccessfully logged out"});
}
};



export { GetAllUsers, GetUserById, CreateNewUser, UserLogin, UserLogout };