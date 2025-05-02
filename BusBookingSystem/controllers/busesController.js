const db = require("../utils/dbConnection");

const addBus =(req,res)=>{

    const {busNumber,totalSeats,availableSeats} = req.body;

    const addBusQuery = `INSERT INTO Buses (busNumber,totalSeats,availableSeats) VALUES (?,?,?)`

    db.execute(addBusQuery,[busNumber,totalSeats,availableSeats],err =>{
        if(err){
            console.log(err.message);
            res.status(500).send(err.message);
            db.end();
            return;
        }

        console.log(`Bus with number ${busNumber} added successfully`);
        res.status(200).send(`Bus with number ${busNumber} added successfully`);
        
    })
}

const getBusesWithMoreThanSeats =(req,res)=>{
    const {seats} = req.params;

    const getBusesWithMoreThanSeatsQuery = `Select * from buses where availableSeats > ${seats}`;

    db.execute(getBusesWithMoreThanSeatsQuery,(err,result)=>{
        if(err){
            console.log(err.message);
            res.status(500).send(err.message);
            db.end();
            return;
        }

        console.log(`getBusesWithMoreThanSeats Query Fetched Successfully`);
        
        res.status(200).send(result);
    })
}

module.exports ={addBus,getBusesWithMoreThanSeats}