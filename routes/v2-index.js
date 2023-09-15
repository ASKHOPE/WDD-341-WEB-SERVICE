const routes = require('express').Router();
const controllers = require("../controllers/v1-index");

routes.get("/", controllers.AskRoute);
routes.get("/Bobby", controllers.BkRoute);
routes.get("/Instructor", controllers.IkRoute);


module.exports = routes;