const {Sequelize,DataTypes} = require("sequelize");

const sequelize = require("../utils/dbConnection");

const IdentityCard = sequelize.define("identitycard",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:true,
        autoIncrement:true
    },
    cardNo:{
        type:DataTypes.INTEGER,
        unique:true,
        allowNull:false
    }
})

module.exports = IdentityCard;