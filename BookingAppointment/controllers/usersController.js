const Users = require("../models/usersModel");
const { get } = require("../routes/userRoutes");

const addUser = async (req, res) => {
  try {
    const { name, email, number } = req.body;

    const User = await Users.create({
      name: name,
      email: email,
      number: number,
    });

    console.log(`User with Name: ${name} Added`);
    res.status(201).send("User added successfully");
  } catch (error) {
    res.status(500).send("Something went wrong");
  }
};

const getUsers = async (req, res) => {
  try {
    const data = await Users.findAll();
    res.status(201).send(data);
  } catch (error) {
    res.status(500).send("Some error occurred");
  }
};

const deleteUserById = async (req, res) => {
  try {
    const { id } = req.params;

    const userTobeDeleted = await Users.destroy({
      where: {
        id: id,
      },
    });

    if (!userTobeDeleted) {
      res.status(404).send("User not found");
    }

    res.status(200).send(`User with id ${id} deleted successfully`);
  } catch (error) {
    res.status(500).send("Error encountered while deleting");
  }
};



module.exports = { 
    addUser,
    getUsers,
    deleteUserById
};
