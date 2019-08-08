const express = require("express");

const UserController = require("../../controllers/auth/user");

const router = express.Router();
// /auth
router.post("/signup", UserController.createUser);

router.post("/login", UserController.userLogin);

module.exports = router;
