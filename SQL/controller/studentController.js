const db = require("../utils/dbConnection");
const Student = require("../models/students");

const getEntries = async (req, res) => {
    try {
        const students = await Student.findAll();
        console.log("Data fetched successfully");
        res.status(200).send(students);
    } catch (error) {
        res.status(500).send("Unable to fetch data")
    }
  
    
};

const getEntryById =async (req, res) => {
    
    try {
      const { id } = req.params;
    const student = await Student.findByPk(id);
    if(!student){
        res.status(404).send("Student not found")
    }
    console.log(`Student with id ${id} fetched successfully`);
    res.status(200).send(student);
} catch (error) {
    res.status(500).send("Student not found")
}

};

const addEntries = async (req, res) => {
  try {
    const { email, name } = req.body;
    const student = Student.create({
      name: name,
      email: email,
    });
    res.status(201).send(`Student with name ${name} is created`);
  } catch (error) {
    res.status(500).send("Unable to make an entry");
  }
};

const updateEntry = async (req, res) => {
    try {
        const { id } = req.params;
        const { email, name } = req.body;
        const student = await Student.findByPk(id);

        if(!student) {
            res.status(404).send("User not found")
        }
        student.name = name;
        student.email =email;
         
        await student.save();

        res.status(200).send("User has been updated")
        
  } catch (error) {
    res.status(500).send("User cannot be updated")
  }
};

const deleteEntry = async (req, res) => {
    
    try {
      const { id } = req.params;
      const student = await Student.destroy({
        where:{
            id:id
        }
      })
    
      if(!student){
        res.status(404).send("Student not found")
      }

      res.status(200).send(`Student with id ${id} deleted successfully`)
  } catch (error) {
    res.status(500).send("Error encountered while deleting")
  }
};


module.exports = {
  getEntries,
  getEntryById,
  addEntries,
  updateEntry,
  deleteEntry
};
