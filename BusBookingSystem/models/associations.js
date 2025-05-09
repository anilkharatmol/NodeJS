const Booking = require("./bookingsModel");
const Bus = require("./busesModel");
const User = require("./usersModel");

// User to Bookings
User.hasMany(Booking);
Booking.belongsTo(User);

// Bus to Bookings
Bus.hasMany(Booking);
Booking.belongsTo(Bus);

module.exports ={User,Booking,Bus}