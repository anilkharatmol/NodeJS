const Booking = require("../models/bookingsModel");
const Bus = require("../models/busesModel");
const User = require("../models/usersModel");

const addBooking = async (req, res) => {
  try {

    const booking = await Booking.create(req.body);
    res.status(200).json({booking});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};




module.exports={addBooking};
