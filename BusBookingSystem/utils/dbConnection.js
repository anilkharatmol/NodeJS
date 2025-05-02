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
    `create table IF NOT EXISTS Users(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(20),
    email VARCHAR(30)
    )`,

    `create table IF NOT EXISTS Buses(
    id INT AUTO_INCREMENT PRIMARY KEY,
    busNumber INT,
    totalSeats INT,
    availableSeats INT
    )`,

    `create table IF NOT EXISTS Bookings(
    id INT AUTO_INCREMENT PRIMARY KEY,
    seatNumber INT
    )`,

    `create table IF NOT EXISTS Payments(
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

module.exports = connection;