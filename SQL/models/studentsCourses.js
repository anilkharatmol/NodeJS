const {Sequelize,DataTypes, Model} = require("sequelize");

const sequelize =require("../utils/dbConnection");

const studentsCourses =sequelize.define("studentscourses",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
    }
})

module.exports =studentsCourses;