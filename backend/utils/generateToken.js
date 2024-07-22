import jwt from 'jsonwebtoken';

const generateTokenAndSetCookie = (userId, res) => {
    const token =jwt.sign({userId}, process.env.JWT_SECRET,{
        expiresIn: '15d',
    });

    res.cookie("jwt",token,{
        maxAge: 15 * 24 * 60 * 60 * 1000, //esto esta en milisegundos
        httpOnly: true, //para prevenir ataques, secuencias de comandos cruzados
        sameSite: "strict" ,//para prevenir ataques entre sitios
        secure: process.env.NODE_ENV !== "development",

    });
};

export default generateTokenAndSetCookie;