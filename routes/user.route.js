const authJwt = require("../middlewares/authJwt");
const userController = require("../controllers/user.controller");
const route = require("express").Router();

route.get("/public-access", userController.publicAccess);
route.get("/user-access", authJwt.verifyToken, userController.userAccess);
route.get("/admin-access", authJwt.verifyToken, authJwt.isAdmin, userController.adminAccess);
route.get("/moderator-access", authJwt.verifyToken, authJwt.isModerator, userController.moderatorAccess);



module.exports = route;