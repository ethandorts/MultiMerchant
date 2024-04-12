import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import DatabaseConnection from '../db.js';
import TokenGenerator from '../authentication/GenerateToken.js';

const GetAllUsers = (req, res) => {
    DatabaseConnection.query('SELECT * FROM Users', (error, results) => {
        if (error) {
            console.error(error);
            return res.status(500).json({ message: 'Could not retrieve all users' });
        }
        res.json(results);
    });
};

const GetUserById = (req, res) => {
    const userId = req.params._id;
    DatabaseConnection.query('SELECT * FROM Users WHERE id = ?', userId, (error, results) => {
        if (error) {
            console.error(error);
            return res.status(500).json({ message: 'User could not be found' });
        }
        if (!results.length) {
            return res.status(401).json({ message: 'User does not exist. Could not retrieve' });
        }
        res.json(results[0]);
    });
};

const CreateNewUser = async (req, res) => {
    const { FirstName, Surname, StreetAddress, City, PostCode, Country, DOB, Email, Username, Password, ApplicationAdmin } = req.body;
    try {
        const existingUser = await getUserByEmail(Email);
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists in the application' });
        }

        const hashedPassword = await bcrypt.hash(Password, 10);
        const ApplicationAdmin = 0;
        await createUser(FirstName, Surname, StreetAddress, City, PostCode, Country, DOB, Email, Username, hashedPassword, ApplicationAdmin);
        res.status(201).json({ message: 'User successfully created' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to create user' });
    }
};

const UserLogin = async (req, res) => {
    const { Email, Password } = req.body;
    try {
        const user = await getUserByEmail(Email);
        if (!user) {
            return res.status(401).json({ message: 'Invalid Email or Password entered!' });
        }

        const passwordIsCorrect = await bcrypt.compare(Password, user.Password);
        if (!passwordIsCorrect) {
            return res.status(401).json({ message: 'Invalid password entered!' });
        }

        TokenGenerator(res, user.UserID);
        res.status(201).json({ message: 'User successfully logged in', user: { FirstName: user.FirstName, Surname: user.Surname } });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'User unsuccessfully logged in' });
    }
};

const UserLogout = (req, res) => {
    res.clearCookie('auth_token');
    res.status(200).json({ message: 'User successfully logged out' });
};

// Helper functions
const getUserByEmail = async (email) => {
    return new Promise((resolve, reject) => {
        DatabaseConnection.query('SELECT * FROM users WHERE Email = ?', [email], (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve(results[0]);
        });
    });
};

const createUser = async (FirstName, Surname, StreetAddress, City, PostCode, Country, DOB, Email, Username, Password, ApplicationAdmin) => {
    return new Promise((resolve, reject) => {
        DatabaseConnection.query('INSERT INTO Users (FirstName, Surname, StreetAddress, City, PostCode, Country, DOB, Email, Username, Password, ApplicationAdmin) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [FirstName, Surname, StreetAddress, City, PostCode, Country, DOB, Email, Username, Password, ApplicationAdmin], (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve(results);
        });
    });
};

export { GetAllUsers, GetUserById, CreateNewUser, UserLogin, UserLogout };
