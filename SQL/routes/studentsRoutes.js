const express = require("express");
const studentController = require("../controller/studentController")
const router = express.Router();

router.get("/",studentController.getEntries)

router.get("/:id",studentController.getEntryById)

router.post("/add",studentController.addEntries)

router.put("/update/:id",studentController.updateEntry)

router.delete("/delete/:id",studentController.deleteEntry)

router.put("/update-varchar-length",studentController.updateVarchar)

module.exports = router;