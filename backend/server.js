require("dotenv").config();

const express = require("express");

const mongoose = require("mongoose");

const cors = require("cors");

const employeeRoutes = require("./routes/employeeRoutes");

const authRoutes = require("./routes/authRoutes");

const app = express();


// MIDDLEWARE

app.use(cors());

app.use(express.json());


// ROUTES

app.use("/api/employees", employeeRoutes);

app.use("/api/auth", authRoutes);


// DATABASE CONNECTION

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {

    console.log("MongoDB Connected");

    app.listen(process.env.PORT, () => {

      console.log(
        `Server Running on Port ${process.env.PORT}`
      );
    });
  })
  .catch((error) => {

    console.log(error);
  });