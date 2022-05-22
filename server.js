const express = require("express"); //Fast, unopinionated, minimalist web framework for node.
const mongoose = require("mongoose");
const cors = require("cors"); //CORS is a node.js package for providing a Connect/Express  middleware that can be used to enable CORS with various options.
const dotenv = require("dotenv"); //Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. Storing configuration in the environment separate from code is based on The Twelve-Factor App methodology.

require("dotenv").config(); //these line is necessary for configuration .env file

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
  //define connection
});

const connection = mongoose.connection; //assign database connection for a constant variable

connection.once("open", () => {
  //open connection for one time
  console.log("MongoDB connection was successful"); //display message in console when the connection was successful
});

const app = express();

//define a port for server
const PORT = process.env.PORT || 8070; //accually process.env.PORT is inbuilt

app.use(cors());
app.use(express.json()); //parse various different custom JSON types as JSON

app.listen(PORT, () => {
  console.log(`Server is up and running on port number ${PORT}`);
});

//View Event  route

app.use("/event", require("./BACKEND/routes/event"));

//view all deeliveries route

app.use("/delivery", require("./BACKEND/routes/delivery"));

// view all appointments route

app.use("/appointment", require("./BACKEND/routes/appointment"));

//view all advertisements route

app.use("/advertisement", require("./BACKEND/routes/advertisement"));

//view all salaries route

app.use("/salary", require("./BACKEND/routes/salary"));

//view all inventories route

app.use("/inventory", require("./BACKEND/routes/inventory"));

//view all other route

app.use("/other", require("./BACKEND/routes/other"));

//view payment details

app.use("/paymentDetails", require("./BACKEND/routes/paymentDetails"));
