const express = require("express");
const {
  addBook,
  getBooks,
  deleteBook,
  addReturnedBook,
  getReturnedBooks,
} = require("../controllers/libraryController");

const router = express.Router();

router.post("/add", addBook);

router.get("/", getBooks);

router.get("/returnedbooks", getReturnedBooks);

router.post("/return/:id", addReturnedBook);

router.delete("/return/:id", addReturnedBook);

module.exports = router;
