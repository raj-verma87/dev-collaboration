const ERROR_MESSAGES = require('../constants/errorMessages');
const Workspace = require('../models/Workspace');
const AppError = require('../utils/AppError');

const createWorkspace = async ({name, userId})=> {
    const workspace = await Workspace.create({
        name,
        owner: userId,
        members: [{ user: userId, role: "owner" }],
    });
    return workspace;
};

const getUserWorkspaces = async ({userId})=> {
    return await Workspace.find({members: userId}).populate('owner', "name email");
};

const inviteToWorkSpace = async ({ workspaceId, userIdToInvite, requestingUserId }) => {
  const workspace = await Workspace.findById(workspaceId);
  
  if (!workspace) throw new Error("Workspace not found");

  const requester = workspace.members.find(
    (m) => m.user.toString() === requestingUserId.toString()
  );

  if (!requester || requester.role !== "owner") {
    throw new Error("Only workspace owner can invite members");
  }

  const alreadyMember = workspace.members.find(
    (m) => m.user.toString() === userIdToInvite
  );

  if (!alreadyMember) {
    workspace.members.push({ user: userIdToInvite, role: "member" });
    await workspace.save();
  }

  return workspace;
};


module.exports = {
    createWorkspace,
    getUserWorkspaces,
    inviteToWorkSpace
}

