const express = require("express");

const router = express.Router();

const students = [
  { id: 1, name: "Alice" },

  { id: 2, name: "Bob" },

  { id: 3, name: "Charlie" },
];

router.get("/",(req,res)=>{
    res.send(`Students:${students.map(s=>s.name)}`)
})

router.get("/:id",(req,res)=>{
    const id = parseInt(req.params.id);

    const student = students.find((s)=>s.id === id)

    if(!student){
        res.send("Student not found")
    }
    else{
        res.send(`Student:${students[req.params.id-1].name}`)
    }
})

module.exports = router;