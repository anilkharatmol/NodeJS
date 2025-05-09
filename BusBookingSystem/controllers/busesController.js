const Booking = require("../models/bookingsModel");
const Bus = require("../models/busesModel");
const {Op} = require("sequelize");
const User = require("../models/usersModel");

const addBus = async (req,res)=>{
    try {
        const {busNumber,totalSeats,availableSeats} = req.body;
        const newBus = await Bus.create({
            busNumber:busNumber,
            totalSeats:totalSeats,
            availableSeats:availableSeats
        })
        res.status(201).send(`Bus with number ${busNumber} added successfully`);
        
    } catch (error) {
        res.status(500).send("Unable to add bus entry");
    }

}

const getBusWithMoreThanSeats =async(req,res)=>{
    
    try {
        const {seats} = req.params;
        const bus = await Bus.findAll({
            where:{
                availableSeats:  {
                    [Op.gt] : Number(seats)
                }
            }
        })

        if(bus.length === 0){
            res.status(404).send("Bus not found");
        }
        console.log(`Bus Fetched Successfully`);
        
        res.status(200).send(bus);
    } catch (error) {
        res.status(404).send("Error occured");
    }

}


const getBookingByBus = async (req, res) => {
  try {
    const { id } = req.params;

    const booking = await Booking.findAll({
      where: {
        BusId: id,
      },
    });

    const user = await User.findAll({
      where: {
        id: id,
      },
    });

    res.status(200).json({booking,user});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports ={addBus,getBusWithMoreThanSeats,getBookingByBus}