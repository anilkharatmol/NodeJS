const express = require("express");
const studentRouter = require("../routes/students");
const coursesRouter = require("../routes/courses")

const app = express();

app.use("/students",studentRouter);
app.use("/courses",coursesRouter)

app.get("/",(req,res)=>{
    res.send("Welcome to the Student & Course Portal API!")
})

app.all("/*splat",(req,res)=>{
    res.status(404).send("<h1>Error - 404  Page Not Found</h1>")
})

app.listen(4000,()=>{
    console.log("Server is running on PORT 4000");  
})

