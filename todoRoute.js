const express = require("express");
const router = express.Router();
const controller = require("./todocontroller");

router.get("/", controller.getTodos);
router.post("/", controller.createTodo);
router.delete("/:id", controller.deleteTodo);

module.exports = router;
