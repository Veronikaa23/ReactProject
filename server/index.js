const express = require("express");
const hbs = require('express-handlebars');
const cookieParser = require('cookie-parser');

const { PORT } = require('./config/env');
const routes = require("./routes");
const { dbInit } = require("./config/DB");
// const { auth } = require("./middlewares/authMiddleware");
// const { errorHandler } = require("./middlewares/errorHandlerMiddleware");

const app = express();

app.engine(
  "hbs",
  hbs.engine({
    extname: "hbs",
  })
);

app.set("view engine", "hbs");

app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use(cookieParser());
// app.use(auth);
app.use(routes);
// app.use(errorHandler)

dbInit();

app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));


// admin, user, guest (authcontroller, authmiddleware) https://www.youtube.com/watch?v=fUWkVxCv4IQ
// vij tova s mongoose v terminala
