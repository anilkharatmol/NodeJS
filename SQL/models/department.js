const {Sequelize,DataTypes} = require("sequelize");

const sequelize = require("../utils/dbConnection");

const Department = sequelize.define("department",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:true,
        autoIncrement:true
    },
    name :{
        type:DataTypes.STRING,
        unique:true,
        allowNull:false
    }
})

module.exports = Department;