const express = require("express");
const authorsRouter = express.Router();

// Mock data
let authors = [
  { id: 1, name: "J.K. Rowling", birthYear: 2003, country: "United Kingdom" },
  { id: 2, name: "Isaac Asimov", birthYear: 2003, country: "United States" },
  {
    id: 3,
    name: "Agatha Christie",
    birthYear: 2003,
    country: "United Kingdom",
  },
];

authorsRouter
  .route("/")
  .get((req, res) => {
    res.json(authors);
  })
  .post((req, res) => {
    // add a new author
    res.json({ message: "Author created" });
  })
  .put((req, res) => {
    res.json({ message: "Cannot updated list authors!!" });
  })
  .delete((req, res) => {
    res.json({ message: "Deleting list authors" });
  });

authorsRouter
  .route("/:authorId")
  .get((req, res) => {
    res.json({ message: "Author retrieved" });
  })
  .post((req, res) => {
    res.json({ message: "Cannot post this author!!" });
  })
  .put((req, res) => {
    res.json({ message: "Author updated" });
  })
  .delete((req, res) => {
    res.json({ message: "Author deleted" });
  });

module.exports = authorsRouter;
