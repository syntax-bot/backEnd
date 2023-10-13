const express = require("express");

const userController = require("../controller/user");

const router = express.Router();

router
  .post("/", userController.createuser)
  .get("/", userController.getAllusers)
  .get("/:id", userController.getuser)
  .put("/:id", userController.replaceuser)
  .patch("/:id", userController.updateuser)
  .delete("/:id", userController.deleteuser);

exports.router=router;