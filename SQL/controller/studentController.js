const db = require("../utils/dbConnection")

const getEntries = (req,res)=>{

    const getEntriesQuery = `Select * from students`

    db.execute(getEntriesQuery,(err,result)=>{
        if(err){
            console.log(err.message);
            res.status(500).send(err.message);
            return;
        }

        console.log("Entries Fetched Successfully");
        res.status(200).send(result);
    })
}

const getEntryById = (req,res) =>{
    const {id} = req.params;

    const getEntryByIdQuery = `Select * from Students where id = ?`

    db.execute(getEntryByIdQuery,[id],(err,result)=>{

        if(err){
            console.log(err.message);
            res.status(404).send(err.message);
            return;
        }

        if(result.length === 0){
            res.status(404).send("Student not found")
            return;
        }
        

        console.log(`Entry with id ${id} fetched successfully`);
        res.status(200).send(result);
    })
}

const addEntries = (req,res) =>{
    const {email,name} = req.body;
    const insertQuery = `INSERT INTO Students (email,name) VALUES (?,?)`;

    db.execute(insertQuery,[email,name],(err)=>{
        if(err){
            console.log(err.message);     
            res.status(500).send(err.message)     
            db.end();
            return;
        }

        console.log("Data Inserted Successfully");
        res.status(200).send(`Student with name ${name} Successfully Created`)
    })
}

const updateEntry =(req,res)=>{
    const {id} = req.params;
    const {email,name} = req.body;
    const updateQuery = `UPDATE Students set email = ?, name = ? where id = ?`

    db.execute(updateQuery,[email,name,id],(err,result)=>{
        if(err){
            console.log(err.message);
            res.status(500).send(err.message);
            db.end();
            return;
        }

        if(result.affectedRows === 0){
            res.status(404).send("Student not found")
        }

        console.log("Entries Updated Successfully");
        res.status(200).send(`Updated name ${name} and email ${email} of Student with id ${id} in Students Table`)
    })
}

const deleteEntry = (req,res) =>{
    const {id} = req.params;

    const deleteQuery = `Delete from Students where id =?`

    db.execute(deleteQuery,[id],(err,result)=>{


        if(err){
            console.log(err.message);
            res.status(404).send(err.message)       
        }

        if(result.affectedRows === 0){
            res.status(404).send("Student not found")
            return;
        }

        console.log(`Student with id ${id} deleted successfully`);
        
        res.status(200).send(`Student with id ${id} deleted successfully`)
    })
      
   
}

const updateVarchar  =  (req, res) => {
    const { columnName, newLength } = req.body;
  
    const sql = `ALTER TABLE Students MODIFY COLUMN ${columnName} VARCHAR(${newLength})`;
  
    db.execute(sql, (err, result) => {
      if (err) {
        console.log(err.message);
        res.status(500).send(err.message);
        return;
      }
      res.status(200).send('VARCHAR length updated successfully');
    });
  }

module.exports ={
    getEntries,
    getEntryById,
     addEntries, 
     updateEntry,
     deleteEntry,
     updateVarchar
}