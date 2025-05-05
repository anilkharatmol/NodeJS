const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("testdb", "root", "1829", {
  host: "localhost",
  dialect: "mysql",
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection to the database has been created");
  } catch (error) {
    console.log(error);
  }
})();

module.exports = sequelize;

// const mysql = require("mysql2");
// const connection = mysql.createConnection({
//     host : 'localhost',
//     user : 'root',
//     password : '1829',
//     database : 'testdb'
// })

// connection.connect((err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }

//     console.log("Connection Created");

//     const creationQuery = `Create table IF NOT EXISTS Students (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     name VARCHAR(20),
//     email VARCHAR(20)
// )`

// connection.execute(creationQuery,(err)=>{
//     if(err){
//         console.log(err);
//         connection.end();
//         return;
//     }

//     console.log("Table is created");

// })
// })

// module.exports = connection;
