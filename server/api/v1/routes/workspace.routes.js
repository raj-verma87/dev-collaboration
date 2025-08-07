const express = require('express');
const router = express.Router();
const workspaceController = require('../controllers/workspace.controller');
const { requiredAuth } = require("../middlewares/auth.middleware");
const asyncHandler = require("../utils/asyncHandler");
const { checkWorkspaceRole } = require("../middlewares/role.middleware");
const validate = require("../middlewares/validate.middleware");
const { removeMemberSchema, changeRoleSchema } = require("../validators/workspace.validator");

router.use(requiredAuth);

router.post("/", asyncHandler(workspaceController.create));
router.get("/", asyncHandler(workspaceController.getAll));
router.post("/invite", checkWorkspaceRole("owner"), asyncHandler(workspaceController.invite));
router.post("/remove-member", checkWorkspaceRole("owner"), validate(removeMemberSchema), asyncHandler(workspaceController.removeMember));
router.post("/change-role", checkWorkspaceRole("owner"), validate(changeRoleSchema), asyncHandler(workspaceController.changeRole));

module.exports = router;
