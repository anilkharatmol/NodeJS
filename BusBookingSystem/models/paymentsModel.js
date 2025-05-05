const {Sequelize,DataTypes} = require("sequelize");

const sequelize = require("../utils/dbConnection");

const Payments = sequelize.define("Payments",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false,
        autoIncrement:true
    },
    amountPaid:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    paymentStatus:{
        type:DataTypes.STRING,
        allowNull:false
    }
})

module.exports = Payments;