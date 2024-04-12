import jwt from 'jsonwebtoken';

const authMiddleware = (req, res, next) => {
    // Get the token from the request cookie
    const token = req.cookies.auth_token;

    // Check if token exists
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized: No token provided' });
    }

    try {
        // Verify and decode the token
        const decoded = jwt.verify(token, 'ABC123'); // Replace 'ABC123' with your secret key
        req.user = decoded; // Attach user information to the request object
        next(); // Call the next middleware or route handler
    } catch (error) {
        console.error('Failed to authenticate token:', error);
        return res.status(401).json({ message: 'Unauthorized: Invalid token' });
    }
};

export default authMiddleware;
