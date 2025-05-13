const { Sequelize, DataTypes } = require("sequelize");

const sequelize = require("../utils/database");

const Library = sequelize.define(
  "library",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    returnTime: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: () => new Date(Date.now() + 60 * 60 * 1000),
    },
    fine: {
      type: DataTypes.VIRTUAL,
      get() {
        const now = new Date();
        const overdueMs = now - this.returnTime;
        const fine =
          overdueMs > 0 ? Math.floor(overdueMs / (60 * 60 * 1000)) * 10 : 0;

        return fine;
      },
    },
  },
  {
    updatedAt: false
  }
);

const returnedBooks=sequelize.define("returnedbooks",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false
    },
    title:{
        type:DataTypes.STRING,
        allowNull:false
    },
    fine:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
},{
    updatedAt:false
})

module.exports = { Library,returnedBooks };
