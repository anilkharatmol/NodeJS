const Student = require("./students");
const IdentityCard = require("./identitycard");
const Department = require("./department");

// One to One
Student.hasOne(IdentityCard);
IdentityCard.belongsTo(Student);

// One to Many
Department.hasMany(Student);
Student.belongsTo(Department);

module.exports ={
    Student,
    IdentityCard,
    Department
}