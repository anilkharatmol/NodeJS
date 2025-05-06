const express = require("express");
const database = require("./utils/database");
const usersRouter = require("./routes/userRoutes");
const cors = require("cors")
const app = express();

app.use(cors());

app.use(express.json());

app.use("/users", usersRouter);

app.get("/", (req, res) => {
  res.send("Welcome to Booking Appointment App");
});

database
  .sync()
  .then(() => {
    app.listen(4000, () => {
      console.log("Server is running on PORT 4000");
    });
  })
  .catch((e) => console.log(e));
