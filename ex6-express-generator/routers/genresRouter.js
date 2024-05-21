const express = require("express");
const genresRouter = express.Router();

// Mock data
let genres = [
  { id: 1, name: "Fantasy" },
  { id: 2, name: "Science Fiction" },
  { id: 3, name: "Mystery" },
];

genresRouter
  .route("/")
  .get((req, res) => {
    res.json(genres);
  })
  .post((req, res) => {
    // add a new genre
    res.json({ message: "Genre created" });
  })
  .put((req, res) => {
    res.json({ message: "Cannot updated list genres!!" });
  })
  .delete((req, res) => {
    res.json({ message: "Deleting list genres" });
  });

genresRouter
  .route("/:genreId")
  .get((req, res) => {
    res.json({ message: "Genre retrieved" });
  })
  .post((req, res) => {
    res.json({ message: "Cannot post this genre!!" });
  })
  .put((req, res) => {
    res.json({ message: "Genre updated" });
  })
  .delete((req, res) => {
    res.json({ message: "Genre deleted" });
  });

module.exports = genresRouter;
