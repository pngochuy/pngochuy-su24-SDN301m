const express = require("express");
const booksRouter = express.Router();

let books = [
  // demo book list
  {
    id: "1",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Literary Fiction",
  },
  {
    id: "2",
    title: "Nineteen Eighty-Four",
    author: "George Orwell",
    genre: "Dystopian",
  },
];

booksRouter
  .route("/")
  .get((req, res) => {
    res.json(books);
  })
  .post((req, res) => {
    // add a new book to the list
    res.json({ message: "Book created" });
  })
  .put((req, res) => {
    res.json({ message: "Cannot updated list books!!" });
  })
  .delete((req, res) => {
    res.json({ message: "Deleting list books" });
  });
booksRouter
  .route("/:bookId")
  .get((req, res) => {
    res.json({ message: "Book retrieved" });
  })
  .post((req, res) => {
    res.json({ message: "Cannot post this book!!" });
  })
  .put((req, res) => {
    res.json({ message: "Book updated" });
  })
  .delete((req, res) => {
    res.json({ message: "Book deleted" });
  });

module.exports = booksRouter;
