const Workspace = require('../models/Workspace');

const checkWorkspaceRole = (requiredRole = "owner")=> {
    return async (req, res, next)=> {
        const {workspaceId} = req.body; // or req.params
        if (!workspaceId) return res.status(400).json({ message: "workspaceId is required" });

        const workspace = await Workspace.findById(workspaceId);
        if (!workspace) return res.status(404).json({ message: "Workspace not found" });

        const membership = workspace.members.find((m)=> m.user.toString() === req.user._id.toString());
        if(!membership || (requiredRole === "owner" && membership.role !== "owner")){
            return res.status(403).json({ message: "Forbidden: insufficient permissions" });
        }
        req.workspace = workspace;
        next();
    }
};


module.exports = { checkWorkspaceRole };
