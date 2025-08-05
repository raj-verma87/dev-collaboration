const authService = require('../services/auth.service');
const baseResponse = require("../utils/baseResponse");
const messages = require("../constants/messages");
const STATUS_CODES = require("../constants/statusCodes");

const register = async (req,res)=> {
    const {user, token} = await authService.registerUser(req.body);
    return baseResponse({
        res,
        statusCode: STATUS_CODES.CREATED,
        message: messages.AUTH.REGISTER_SUCCESS,
        data: { user, token },
    });
};

const login = async (req, res)=> {
    const {user, token} = await authService.loginUser(req.body);
    return baseResponse({
        res,
        message: messages.AUTH.LOGIN_SUCCESS,
        data: { user, token },
    });
};

module.exports = {register, login};
