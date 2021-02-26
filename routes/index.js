const route = require("express").Router();
const authRoute = require("./auth.route");
const userRoute = require("./user.route");
const errorhandler = require("../middlewares/errorHandler");

route.use("/auth", authRoute);
route.use("/board", userRoute);

route.use(errorhandler);


module.exports = route;