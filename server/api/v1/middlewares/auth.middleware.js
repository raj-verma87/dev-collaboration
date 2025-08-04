const jwt = require('jsonwebtoken');
const User = require('../models/User');
const ERROR_MESSAGES = require('../constants/errorMessages');
const STATUS_CODES = require("../constants/statusCodes");
const AppError = require("../utils/AppError");

const requiredAuth = async (req, res, next)=> {
    const authHeader = req.headers.authorization;
    if(!authHeader || !authHeader.startsWith('Bearer ')){
       return res.status(STATUS_CODES.UNAUTHORIZED).json({message:  ERROR_MESSAGES.AUTH.INVALID_CREDENTIALS});
    }
    const token = authHeader.split(" ")[1];
    try{
        const decode = jwt.verify(token,process.env.JWT_SECRET);
        const user = await User.findById(decode.id).select('-password');
        if(!user) throw new AppError("User not found",404);
        req.user = user;
        next();
    }
    catch(err){
        res.status(STATUS_CODES.UNAUTHORIZED).json({message: ERROR_MESSAGES.AUTH.TOKEN_INVALID});
    }
}

module.exports = {requiredAuth};

