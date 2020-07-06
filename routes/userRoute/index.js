const router = require("express").Router();
const Controller = require("../../controllers");

router.get("/", Controller.userController.test);

module.exports = router;
