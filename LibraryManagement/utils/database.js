const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("librarymanagement", "root", "Anil@1829", {
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
