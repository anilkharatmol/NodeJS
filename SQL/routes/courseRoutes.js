const express = require("express");
const { addCourse, addStudentsToCourses } = require("../controller/courseController");

const router=express.Router();

router.post("/addcourses",addCourse);
router.get("/addstudentstocourses",addStudentsToCourses);

module.exports=router;