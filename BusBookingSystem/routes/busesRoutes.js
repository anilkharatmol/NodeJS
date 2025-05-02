const express = require("express");
const busesControler = require("../controllers/busesController")
const router = express.Router();

router.post("/",busesControler.addBus)

router.get("/available/:seats",busesControler.getBusesWithMoreThanSeats)

module.exports = router;