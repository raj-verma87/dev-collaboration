const workSpaceService = require('../services/workspace.service');
const baseResponse = require('../utils/baseResponse');

const create = async (req,res)=> {
    const workspace = await workSpaceService.createWorkspace({
        name: req.body.name,
        userId: req.user._id
    });
    return baseResponse({
        res,
        statusCode: 201,
        message: "Workspace created successfully",
        data: workspace,
    })

};

const getAll = async (req,res)=> {
    const workspaces = await workSpaceService.getUserWorkspaces({ userId: req.user._id });
    return baseResponse({
        res,
        message: "User workspaces retrieved",
        data: workspaces,
    })
};

const invite = async (req, res)=> {
    const {workspaceId, userId} = req.body;

    const workspace = await workSpaceService.inviteToWorkSpace({
        workspaceId,
        userIdToInvite: userId,
        requestingUserId: req.user._id
    });

    return baseResponse({
    res,
    message: "User invited to workspace",
    data: workspace,
  });
};

module.exports = {
  create,
  getAll,
  invite,
};


