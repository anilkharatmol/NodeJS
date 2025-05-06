const {Sequelize} = require("sequelize");

const sequelize = new Sequelize('bookingappointment','root','1829',{
    host:'localhost',
    dialect:'mysql'
})

module.exports = sequelize;