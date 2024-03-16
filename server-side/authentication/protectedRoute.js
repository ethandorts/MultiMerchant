import jwt from 'jsonwebtoken';
import Users from '../DatabaseModels/UsersSchema';

const ProtectedRoute = async (req , res , next) => {
    let token = req.cookie.auth_token;
    if (token) {
        const decoded = jwt.verify(token, 'ABC123');
        req.user = await Users.findById(decoded.UserID).select('-Password');
        next();
    } else {
        throw new Error("User can't be authorised");
    }
};

export { ProtectedRoute };