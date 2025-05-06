const express = require("express");
const usersController = require("../controllers/usersController")

const router=express.Router();

router.post("/add",usersController.addUser);

router.get("/",usersController.getUsers)

router.delete("/delete/:id",usersController.deleteUserById);

module.exports=router;