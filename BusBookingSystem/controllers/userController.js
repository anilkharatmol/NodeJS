const db = require("../utils/dbConnection")

const addUser = (req,res) =>{
   const {name,email} = req.body;

    const addUserQuery = `INSERT INTO Users (name,email) VALUES (?,?)`

    db.execute(addUserQuery,[name,email],(err)=>{
        if(err){
            console.log(err.message);
            res.status(500).send(err.message);
            db.end();
            return;
        }

        console.log("Date Inserted Into Users Table Successfully");
        res.status(200).send(`Added entry name ${name} and email ${email} in Users table`)
        
    })
}

const getUsers =(req,res)=>{
    const getUsersQuery = `SELECT * From Users`

    db.execute(getUsersQuery,(err,result)=>{
        if(err){
            console.log(err.message);
            res.status(404).send(err.message);
            db.end();
            return;
        }

        console.log(`Users Data Fetched Successfully`);
        
        res.status(200).send(result)
    })
}


module.exports ={
    addUser,
    getUsers
}