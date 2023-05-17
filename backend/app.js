const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");


// env file
dotenv.config({ path: "./config.env" });
const port = process.env.PORT;

app.use(cors());

//database
require("./db/db");

//to see json data 
app.use(express.json());

//userSchema
const User = require("./model/userSchema");
app.use(require("./router/auth"));

app.listen(port, (req, res) => {
  console.log(`port is listing on ${port}`);
});
