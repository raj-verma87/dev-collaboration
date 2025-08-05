const express = require('express');
const router = express.Router();
const workspaceController = require('../controllers/workspace.controller');
const { requiredAuth } = require("../middlewares/auth.middleware");
const asyncHandler = require("../utils/asyncHandler");
const { checkWorkspaceRole } = require("../middlewares/role.middleware");


router.use(requiredAuth);

router.post("/", asyncHandler(workspaceController.create));
router.get("/", asyncHandler(workspaceController.getAll));
router.post("/invite", checkWorkspaceRole("owner"), asyncHandler(workspaceController.invite));

module.exports = router;
