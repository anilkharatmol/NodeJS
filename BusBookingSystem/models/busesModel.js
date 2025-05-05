const {Sequelize,DataTypes} = require("sequelize");

const sequelize = require("../utils/dbConnection")

const Buses = sequelize.define("Buses",{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false
    },
    busNumber:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    totalSeats :{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    availableSeats:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
});

module.exports = Buses;