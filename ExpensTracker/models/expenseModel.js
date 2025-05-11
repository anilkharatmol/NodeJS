const {Sequelize,DataTypes} =require("sequelize");

const sequelize=require("../utils/database");

const ExpenseTracker=sequelize.define("expenses",{
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    },
    amount:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    description:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    category:{
        type:DataTypes.STRING,
        allowNull:false
    }
})

module.exports=ExpenseTracker;