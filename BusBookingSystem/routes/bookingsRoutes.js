const express = require("express");
const { addBooking } = require("../controllers/bookingsController");

const router= express.Router();

router.post("/",addBooking);


module.exports=router;