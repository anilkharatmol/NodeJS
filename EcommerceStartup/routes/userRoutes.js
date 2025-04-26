const express = require("express");
const { getAllUsers,addUser,getUserById } = require("../controllers/userController")

const router = express.Router();

router.get("/",getAllUsers)

router.post("/",addUser)

router.get("/:userId",getUserById)

module.exports = router;