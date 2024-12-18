require("dotenv").config();

const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const helmet = require("helmet");

const cors = require("cors");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const productsRouter = require("./routes/products");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(helmet());
app.use(
  cors({
    origin: ["http://localhost:5173", "https://hogent.be"],
    credentials: true,
  })
);
// Deze lijn mag verwijderd worden
// app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/products", productsRouter);

app.all("/*name", (req, res) => {
  res.send("APP.JS Fallback");
});

module.exports = app;
