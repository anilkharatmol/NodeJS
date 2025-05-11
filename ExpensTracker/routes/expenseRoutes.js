const express = require("express");
const { addExpense, getExpenses, deleteExpense, updateExpense } = require("../controllers/expenseController");

const router=express.Router();

router.post("/add",addExpense);

router.get("/",getExpenses);

router.delete("/delete/:id",deleteExpense);

router.put("/update/:id",updateExpense);

module.exports=router;