const mongoose = require("mongoose");

const { DB_QUERYSTRING } = require("./env");

exports.dbInit = () => {
  mongoose.set("strictQuery", true);
  mongoose.connection.on("open", () => console.log("DB is connected!"));

  return mongoose.connect(DB_QUERYSTRING);
};
