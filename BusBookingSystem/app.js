const express = require("express");

const app = express();
const MySQL = require("mysql2");

const connection = MySQL.createConnection({
  host: "localhost",
  user: "root",
  password: "1829",
  database: "testdb",
});

connection.connect((err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log("Connection Created");

  const creationQueries = [
    `create table Users(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(20),
    email VARCHAR(30)
    )`,

    `create table Buses(
    id INT AUTO_INCREMENT PRIMARY KEY,
    busNumber INT,
    totalSeats INT,
    availableSeats INT
    )`,

    `create table Bookings(
    id INT AUTO_INCREMENT PRIMARY KEY,
    seatNumber INT
    )`,

    `create table Payments(
    id INT AUTO_INCREMENT PRIMARY KEY,
    amountPaid INT,
    paymentStatus VARCHAR(20)
    )`,

  ];

  creationQueries.forEach((query)=>{
    connection.execute(query, (err) => {
        if (err) {
          console.log(err);
          connection.end();
          return;
        }
    
        console.log(`${query} CREATED`);
      });
  })

});

app.get("/", (req, res) => {
  res.send("Welcome to Bus Booking System");
});

app.listen(3000, () => {
  console.log("Server is running on PORT 3000");
});
