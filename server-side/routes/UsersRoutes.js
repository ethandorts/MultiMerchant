import express from 'express';
import { GetAllUsers, GetUserById, CreateNewUser, UserLogin, UserLogout } from '../controllers/UsersController.js';

const UsersRoutes = express.Router();

UsersRoutes.get('/api/users/getAllUsers', GetAllUsers);
UsersRoutes.get('/api/users/getUserById/:id', GetUserById);
UsersRoutes.post('/api/users/createUser', CreateNewUser);
UsersRoutes.post('/api/users/login', UserLogin);
UsersRoutes.post('/api/users/logout', UserLogout);

export default UsersRoutes;