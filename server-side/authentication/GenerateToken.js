import jwt from 'jsonwebtoken';

const GenerateToken = (res, UserID ) => {
    const token = jwt.sign({ UserID }, 'ABCDEF', {expiresIn: '14d'});

    res.cookie('auth_token', token, {
        httpOnly: true,
        sameSite: 'strict',
        maxAge: 25940000
    });
    
}

export default GenerateToken;