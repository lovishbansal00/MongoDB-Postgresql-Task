const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors");

const app = express();
//use express.json() to get data into json format
app.use(express.json());
//Port
const PORT = process.env.PORT || 5500;

//use cors
app.use(cors());

//import routes
const TodoItemRoute = require("./routes/todoItems");

//connect to mongodb ..
mongoose
  .connect(
    `mongodb+srv://lovishbansal330:${process.env.password}@todo-cluster.jk9a1bg.mongodb.net/todolistDB`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Database connected"))
  .catch((err) => console.log(err));

app.use("/", TodoItemRoute);

//connect to server
app.listen(PORT, () => console.log("Server connected"));
