const Buses = require("../models/busesModel");
const {Op} = require("sequelize")

const addBus = async (req,res)=>{
    try {
        const {busNumber,totalSeats,availableSeats} = req.body;
        const newBus = await Buses.create({
            busNumber:busNumber,
            totalSeats:totalSeats,
            availableSeats:availableSeats
        })
        res.status(201).send(`Bus with number ${busNumber} added successfully`);
        
    } catch (error) {
        res.status(500).send("Unable to add bus entry");
    }

}

const getBusesWithMoreThanSeats =async(req,res)=>{
    
    try {
        const {seats} = req.params;
        const bus = await Buses.findAll({
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

module.exports ={addBus,getBusesWithMoreThanSeats}