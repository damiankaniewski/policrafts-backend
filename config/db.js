const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/polycrafts")
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((err) => {
    console.error("Error connecting to the database:", err);
  });
