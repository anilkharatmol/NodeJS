const express = require("express");
const studentController = require("../controller/studentController")
const router = express.Router();

router.get("/",studentController.getEntries)

router.get("/:id",studentController.getEntryById)

router.post("/add",studentController.addEntries)

router.put("/update/:id",studentController.updateEntry)

router.delete("/delete/:id",studentController.deleteEntry)

router.post("/addingStudentWithCard",studentController.addingValuesToStudentandIdentityCardTable);

router.post("/addingStudentWithDepartment",studentController.addingValuesToStudentandDepartmentTable);

module.exports = router;