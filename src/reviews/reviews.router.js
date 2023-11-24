const router = require("express").Router();
const controller = require("./reviews.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router.route("/")
    .put(controller.update)
    .all(methodNotAllowed);

module.exports = router;