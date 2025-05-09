const express = require("express");
const db = require("./utils/dbConnection");
const studentRouter = require("./routes/studentsRoutes");
const courseRouter = require("./routes/courseRoutes");
const app = express();

const studentModel = require("./models/students")
const identitycard = require("./models/identitycard")
const department = require("./models/department")
const courses = require("./models/courses")
const studentscourses = require("./models/studentsCourses")
const association = require("./models/associations")

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/students", studentRouter);

app.use("/courses",courseRouter)

db.sync()
  .then(() => {
    app.listen(3000, () => {
      console.log("Server is running on PORT 3000");
    });
  })
  .catch((e) => console.log(e));
