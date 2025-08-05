const ERROR_MESSAGES = require('../constants/errorMessages');
const Workspace = require('../models/Workspace');
const AppError = require('../utils/AppError');

const createWorkspace = async ({name, userId})=> {
    const workspace = await Workspace.create({
        name,
        owner: userId,
        members: [userId]
    });
    return workspace;
};

const getUserWorkspaces = async ({userId})=> {
    return await Workspace.find({members: userId}).populate('owner', "name email");
};

const inviteToWorkSpace = async({workspaceId, userIdToInvite, requestingUserId})=> {
    const workspace = await Workspace.findById(workspaceId);
    if(!workspace)throw new AppError(ERROR_MESSAGES.WORKSPACE.NOT_FOUND,404);

    if(!workspace.owner.equals(requestingUserId)){
        throw new AppError(ERROR_MESSAGES.WORKSPACE.OWNER_INVITE,404);
    }
    if(!workspace.members.includes(userIdToInvite)){
        workspace.members.push(userIdToInvite);
        await workspace.save();
    }
    return workspace;
};

module.exports = {
    createWorkspace,
    getUserWorkspaces,
    inviteToWorkSpace
}

