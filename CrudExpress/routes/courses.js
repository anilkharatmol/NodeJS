const express = require("express");

const router = express.Router();

const courses = [
  { id: 1, name: "Frontend", description: "HTML, CSS, JS, React" },

  { id: 2, name: "Backend", description: "Node.js, Express, MongoDB" },
];

router.get("/",(req,res)=>{
    res.send(`Courses:${courses.map((course)=>course.name)}`)
})

router.get("/:id",(req,res)=>{
    const id = parseInt(req.params.id);

    const course = courses.find((course)=>course.id === id)

    if(course){
        res.send(`Course:${course.description}`)
    }
    else{
        res.send("Course not found");
    }
})

module.exports = router;