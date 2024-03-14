import express from 'express';
import { GetAllUsers, GetUserById } from '../controllers/UsersController.js';

const UsersRoutes = express.Router();

UsersRoutes.get('/users/getAllUsers', GetAllUsers);
UsersRoutes.get('/users/getUserById/:id', GetUserById);

export default UsersRoutes;