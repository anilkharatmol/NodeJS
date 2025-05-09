const {Sequelize,DataTypes, Model} = require("sequelize");

const sequelize =require("../utils/dbConnection");

const Courses =sequelize.define("courses",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
    },
    name :{
        type:DataTypes.STRING,
        allowNull:false
    }
})

module.exports =Courses;