const Booking = require("../models/bookingsModel");
const Bus = require("../models/busesModel");
const Users = require("../models/usersModel");

const addUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    const user = Users.create({
      name: name,
      email: email,
    });
    console.log("Date Inserted Into Users Table Successfully");
    res
      .status(200)
      .send(`Added entry name ${name} and email ${email} in Users table`);
  } catch (error) {
    res.status(500).send("Unable to insert data");
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await Users.findAll();
    console.log(`Users Data Fetched Successfully`);
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send("Unable to fetch data");
  }
};

const getBookingByUser = async (req, res) => {
  try {
    const { id } = req.params;

    const booking = await Booking.findAll({
      where: {
        UserId: id,
      },
    });

    const bus = await Bus.findAll({
      where: {
        id: id,
      },
    });

    res.status(200).json({booking,bus});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  addUser,
  getUsers,
  getBookingByUser
};
