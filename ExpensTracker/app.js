const express = require("express");
const expressRoutes = require("./routes/expenseRoutes");
const database = require("./utils/database");
const cors=require("cors")
const app = express();

app.use(express.json());
app.use(cors());

const expenseModel = require("./models/expenseModel");

app.get("/", (req, res) => {
  res.send("Welcome to Expense Tracker");
});

app.use("/expensetracker", expressRoutes);


database.sync()
  .then(() => {
    app.listen(4000, () => {
      console.log("Server is running on PORT 4000");
    });
  })
  .catch((e) => console.log(e));
