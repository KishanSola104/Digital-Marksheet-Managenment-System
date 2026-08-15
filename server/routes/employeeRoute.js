const express = require("express");
const router = express.Router();

const employeeController = require("../controllers/employeeController");
const authenticate = require("../middlewares/authMiddleware");
const authorize = require("../middlewares/authorize");

// Create Employee
router.post("/",authenticate,authorize("ADMIN"), employeeController.createEmployee);

// Get All Employees By SchoolId
router.get("/", authenticate, authorize("ADMIN"), employeeController.getEmployee);

// Get Employee By Employee ID
router.get("/get/:id", authenticate, authorize("ADMIN"), employeeController.getEmployeeById);

// Get Employee By Name
router.get("/getByName/:name", authenticate, authorize("ADMIN"), employeeController.getEmployeeByName);

// Update Employee
router.put("/update/:id", authenticate, authorize("ADMIN"), employeeController.updateEmployeeById);

// Delete Employee
router.delete("/delete/:id", authenticate, authorize("ADMIN"), employeeController.deleteById);

// Activate / Deactivate Employee
router.patch("/status/:id", authenticate, authorize("ADMIN"), employeeController.statusChangeById);

//Get Employee By Email
router.get("/email/:email", authenticate, authorize("ADMIN"), employeeController.getEmployeesByEmail);

// Get Employee By Role
router.get("/role/:roleId", authenticate, authorize("ADMIN"), employeeController.getEmployeesByRole);

module.exports = router;