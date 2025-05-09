const express = require("express");
const db = require("./utils/dbConnection");
const studentRouter = require("./routes/studentsRoutes");
const app = express();

const studentModel = require("./models/students")
const identitycard = require("./models/identitycard")
const association = require("./models/associations")

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/students", studentRouter);

db.sync()
  .then(() => {
    app.listen(3000, () => {
      console.log("Server is running on PORT 3000");
    });
  })
  .catch((e) => console.log(e));
