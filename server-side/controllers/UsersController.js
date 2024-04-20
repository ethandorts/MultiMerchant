import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import DatabaseConnection from '../db.js';

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
    const UserId = req.params.id; 
    DatabaseConnection.query('SELECT * FROM Users WHERE UserID = ?', UserId, (error, results) => {
        if (error) {
            console.error(error);
            return res.status(500).json({ message: 'User could not be found' });
        }
        if (!results.length) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(results[0]);
    });
};

const CreateNewUser = async (req, res) => {
    const { FirstName, Surname, StreetAddress, City, PostCode, Country, DOB, Username, Email, Password} = req.body;
    try {
        const HashedPassword = await bcrypt.hash(Password, 10);
        const query = 'INSERT INTO Users (FirstName, Surname, StreetAddress, City, PostCode, Country, DOB, Username, Email, Password, ApplicationAdmin) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 0)';
        DatabaseConnection.query(query, [FirstName, Surname,  StreetAddress, City, PostCode, Country, DOB, Username, Email, HashedPassword], (error) => {
            if (error) {
                console.error(error);
                return res.status(500).json({ message: 'Failed to create user' });
            }
            res.status(201).json({ message: 'User successfully created' });
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to create user' });
    }
};

const UserLogin = async (req, res) => {
    const { Email, Password } = req.body;
    try {
        const query = 'SELECT * FROM Users WHERE Email = ?';
        DatabaseConnection.query(query, [Email], async (error, results) => {
            if (error) {
                console.error(error);
                return res.status(500).json({ message: 'User unsuccessfully logged in' });
            }
            if (!results.length) {
                return res.status(401).json({ message: 'Invalid Email or Password entered!' });
            }

            const user = results[0];
            const passwordIsCorrect = await bcrypt.compare(Password, user.Password);
            if (!passwordIsCorrect) {
                return res.status(401).json({ message: 'Invalid password entered!' });
            }

            const token = jwt.sign({ id: user.UserID, FirstName: user.FirstName, Surname: user.Surname }, 'ABC123', { expiresIn: '1h' });

            res.cookie('auth_token', token, {
                httpOnly: true,
                sameSite: 'strict',
                maxAge: 3600000,
            });

            res.status(200).json({ message: 'User successfully logged in', token, FirstName: user.FirstName, Surname: user.Surname });
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'User unsuccessfully logged in' });
    }
};

const UserLogout = (req, res) => {
    res.clearCookie('auth_token');
    res.status(200).json({ message: 'User successfully logged out' });
};

export { GetAllUsers, GetUserById, CreateNewUser, UserLogin, UserLogout };
