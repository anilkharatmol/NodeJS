const Expense = require("../models/expenseModel");

const addExpense = async (req, res) => {
  try {
    const expense = await Expense.create(req.body);
    res.status(200).json(expense);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.findAll();

    if(expenses.length===0){
          res.status(404).send("No Expense found");
          return;
    }

    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({"message":error.message});
  }

};

const deleteExpense = async (req, res) => {
  try {
    const { id } = req.params;
    const expense = await Expense.findByPk(id);

    if (!expense) {
      res.status(404).send("Expense not found");
      return;
    }

    await expense.destroy();
    res.status(200).send(`Expense with id: ${id} deleted successfully`);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateExpense=async(req,res)=>{
    try {
        const{id}=req.params;
        const expense=await Expense.findByPk(id);

        if(!expense){
            res.status(404).send("Expense not found");
            return;
        }

       await expense.update(req.body);

       await expense.save();

       res.status(200).json(expense);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}

module.exports = { addExpense, getExpenses, deleteExpense,updateExpense };
