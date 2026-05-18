const express = require("express");

const router = express.Router();

const {
  addEmployee,
  getEmployees,
  deleteEmployee,
  aiRecommendation,
} = require("../controllers/employeeController");


// GET ALL EMPLOYEES

router.get("/", getEmployees);


// ADD EMPLOYEE

router.post("/", addEmployee);


// DELETE EMPLOYEE

router.delete("/:id", deleteEmployee);


// AI RECOMMENDATION

router.get("/ai", aiRecommendation);


module.exports = router;