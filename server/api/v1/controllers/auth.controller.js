const authService = require('../services/auth.service');
const asyncHandler = require('../utils/asyncHandler');
const baseResponse = require("../utils/baseResponse");
const messages = require("../constants/messages");
const STATUS_CODES = require("../constants/statusCodes");

const register = asyncHandler(async (req,res)=> {
    const {user, token} = await authService.registerUser(req.body);
    return baseResponse({
        res,
        statusCode: STATUS_CODES.CREATED,
        message: messages.AUTH.REGISTER_SUCCESS,
        data: { user, token },
    });
});

const login = asyncHandler( async (req, res)=> {
    const {user, token} = await authService.loginUser(req.body);
    return baseResponse({
        res,
        message: messages.AUTH.LOGIN_SUCCESS,
        data: { user, token },
    });
});

module.exports = {register, login};
