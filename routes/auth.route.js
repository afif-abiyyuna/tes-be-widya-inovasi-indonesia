const verifyRegister = require("../middlewares/verifyRegister");
const authController = require("../controllers/auth.controller");
const route = require("express").Router();

route.post("/register", verifyRegister.checkDuplicateUsernameOrEmail, authController.register);
route.post("/login", authController.login);

module.exports = route;
