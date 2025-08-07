const Joi = require('joi');

const workspaceId = Joi.string().length(24).hex().required();
const userId = Joi.string().length(24).hex().required();

const removeMemberSchema = Joi.object({
    workspaceId,
    userIdToRemove: userId
});

const changeRoleSchema = Joi.object({
    workspaceId,
    userIdToUpdate: userId,
    newRole: Joi.string().valid("member","owner").required()
});

module.exports = {
    removeMemberSchema,
    changeRoleSchema
};

