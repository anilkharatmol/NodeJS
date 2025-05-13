const { Library, returnedBooks } = require("../models/libraryModel");

const addBook = async (req, res) => {
  try {
    const book = await Library.create(req.body);

    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getBooks = async (req, res) => {
  try {
    const books = await Library.findAll();

    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addReturnedBook = async (req, res) => {
  try {
    const method = req.method;
    const { id } = req.params;

    if (method === "POST") {
      const book = await Library.findByPk(id);

      if (!book) {
        return res.status(404).send("Book not found");
      }

      const returnedBook = await returnedBooks.create({
        id: id,
        title: book.title,
        fine: book.fine,
      });
      return res.status(201).json(returnedBook);
    } else if (method === "DELETE") {
      const book = await Library.findByPk(id);

      if (!book) {
        return res.status(404).json({ message: "Book not found" });
      }

      await book.destroy();
      return res.status(200).json({ message: `Book with id ${id} Deleted From Library`});
    } else {
      return res.status(405).json({ message: "Method Not Allowed" });
    }
  } catch (error) {
    return res.status(500).json({ message:error.message});
  }
};

const getReturnedBooks = async (req, res) => {
  try {
    const returnbooks = await returnedBooks.findAll();

    res.status(200).json(returnbooks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { addBook, getBooks, addReturnedBook,getReturnedBooks };
