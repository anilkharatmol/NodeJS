const express = require("express");
const db = require("./utils/dbConnection")
const userRouter = require("./routes/usersRoutes");
const busesRouter = require("./routes/busesRoutes")
const app = express();

app.use(express.json())

app.get("/", (req, res) => {
  res.send("Welcome to Bus Booking System");
});

app.use("/users",userRouter);

app.use("/buses",busesRouter)

app.listen(3000, () => {
  console.log("Server is running on PORT 3000");
});
