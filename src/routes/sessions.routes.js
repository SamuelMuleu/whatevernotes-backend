const { Router } = require("express");

const SessionsController = require("../controlles/SessionsControler");
const sessionsController = new SessionsController();


const sessionsRoutes = Router();

sessionsRoutes.post("/", sessionsController.create);



module.exports = sessionsRoutes;
