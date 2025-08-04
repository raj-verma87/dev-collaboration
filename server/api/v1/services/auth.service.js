const User = require('./../models/User');
const bcrypt = require('bcryptjs');
const {generatetoken} = require('../utils/jwt.util');
const AppError = require("../utils/AppError");
const MESSAGES = require("../constants/messages");
const ERROR_MESSAGES = require('../constants/errorMessages');
const STATUS_CODES = require('../constants/statusCodes');

const registerUser = async ({name,email,password})=> {
    const existingUser = await User.findOne({email});
    if(existingUser) throw new AppError(ERROR_MESSAGES.AUTH.EMAIL_EXISTS, 400);

    const hashpassword = await bcrypt.hash(password,10);
    const user = await User.create({name,email,password:hashpassword});

    return {
            user: {id: user._id, name : user.name, email: user.email},
            token : generatetoken(user._id)
        };
};

const loginUser = async ({email, password})=> {
    const user = await User.findOne({email});
    if(!user) throw new AppError("Invalid credentials", STATUS_CODES.BAD_REQUEST);

    const isMatch = await bcrypt.compare(password,user.password);
    if(!isMatch) throw new AppError("Invalid credentials", STATUS_CODES.UNAUTHORIZED);

    return {
        user: {id: user._id,name: user.name,email: user.email},
        token: generatetoken(user._id)
    };
};

module.exports = {registerUser, loginUser};
