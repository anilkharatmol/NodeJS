const Student = require("./students");
const IdentityCard = require("./identitycard");
const Department = require("./department");
const Courses = require("./courses");
const studentsCourses = require("./studentsCourses");

// One to One
Student.hasOne(IdentityCard);
IdentityCard.belongsTo(Student);

// One to Many
Department.hasMany(Student);
Student.belongsTo(Department);

// Many to Many
Student.belongsToMany(Courses,{through:studentsCourses})
Courses.belongsToMany(Student,{through:studentsCourses})

module.exports ={
    Student,
    IdentityCard,
    Department,
    studentsCourses,
    Courses
}