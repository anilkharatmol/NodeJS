const express = require("express");
const db = require("./utils/dbConnection");
const userRouter = require("./routes/usersRoutes");
const busesRouter = require("./routes/busesRoutes");
const bookingsRouter = require("./routes/bookingsRoutes");
const app = express();

app.use(express.json());

const User = require("./models/usersModel")
const Booking = require("./models/bookingsModel")
const Payment = require("./models/paymentsModel")
const Buse = require("./models/busesModel")
const association = require("./models/associations")


app.get("/", (req, res) => {
  res.send("Welcome to Bus Booking System");
});

app.use("/users", userRouter);

app.use("/buses", busesRouter);

app.use("/bookings",bookingsRouter);

db.sync()
  .then(() => {
    app.listen(3000, () => {
      console.log("Server is running on PORT 3000");
    });
  })
  .catch((e) => console.log(e));
