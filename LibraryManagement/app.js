const express = require("express");
const cors = require("cors");
const database = require("./utils/database");
const libraryRoutes=require("./routes/libraryRoutes")
const Library = require("./models/libraryModel");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/library",libraryRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to Library Management System");
});

database
  .sync()
  .then(() => {app.listen(3000,()=>{
    console.log("Server Started and running on PORT 3000");
    
  })})
  .catch((error) => console.log(error));
