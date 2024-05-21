// server.js
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");

// Import routers
const booksRouter = require("./routers/booksRouter");
const genresRouter = require("./routers/genresRouter");
const authorsRouter = require("./routers/authorsRouter");

// Initialize the app
const app = express();

app.use(morgan("dev")); // dùng để hiện method đc dùng trong terminal
app.use(express.static(__dirname + "/public"));

// Use body-parser
app.use(bodyParser.json());

// Routes
app.use("/books", booksRouter);
app.use("/genres", genresRouter);
app.use("/authors", authorsRouter);

app.all("/dishes", (req, res, next) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  next();
});

// Handle root route
app.get("/", (req, res) => {
  res.send("Welcome to the Bookstore API!");
});

// Set the server to listen on a specific port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
