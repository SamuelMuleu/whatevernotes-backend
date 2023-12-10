const { Router } = require("express");

const TagsController = require("../controlles/TagsController");

const ensureAuthenticated = require("../middlewares/ensureAuthenticated");
const tagsRoutes = Router();

const tagsController = new TagsController();

tagsRoutes.get("/", ensureAuthenticated,tagsController.index);



module.exports = tagsRoutes;
