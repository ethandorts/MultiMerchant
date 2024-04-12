import jwt from 'jsonwebtoken';

const TokenGenerator = (res, UserId) => {
    const auth_token = jwt.sign({ UserId }, 'ABC123', { expiresIn: '30d'});

    res.cookie('jwt', auth_token, {
        httpOnly: true, 
        sameSite: 'strict',
        maxAge: 259200000,
    });
}

export default TokenGenerator;