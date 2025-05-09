const Courses = require("../models/courses");
const Students = require("../models/students");

const addCourse = async (req,res) =>{
    try {
        const {name} = req.body;

        const course= await Courses.create({name:name});

        res.status(201).json(course)
    } catch (error) {
        res.status(500).json({"error":error.message})
    }
}

const addStudentsToCourses = async(req,res)=>{

    try {
        const {studentId,courseIds} = req.body;

        const student = await Students.findByPk(studentId);

        const course = await Courses.findAll({
            where:{
                id:courseIds
            }
        })

        await student.addCourse(course) 

        const updatedStudent = await Students.findByPk(studentId,{include:Courses})

        res.status(201).json(updatedStudent);

    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

module.exports={addCourse,addStudentsToCourses}