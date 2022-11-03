const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const userRoute = require("./routes/Register");
const bookRoute = require("./routes/book");
const borrowedRoute = require("./routes/borrow");
mongoose
  .connect("mongodb://localhost:27017/library")
  .then(() => console.log("database connected"))
  .catch((err) => console.error(err));
app.use(cors());
app.use(express.json());
app.use(userRoute);
app.use(bookRoute);
app.use(borrowedRoute);

app.listen(8000, () => console.log("server running at port 8000"));
