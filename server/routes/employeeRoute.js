const express = require("express");
const router = express.Router();

const employeeController = require("../controllers/employeeController");
const authenticate = require("../middlewares/authMiddleware");
const authorize = require("../middlewares/authorize");

// Create Employee
router.post(
    "/",
    authenticate,
    authorize(1),
    employeeController.createEmployee
);

// Get All Employees
router.get(
    "/",
    authenticate,
    authorize(1),
    employeeController.getEmployee
);

// Get Employee By Employee ID
router.get(
    "/get/:id",
    authenticate,
    authorize(1),
    employeeController.getEmployeeById
);

// Get Employee By Name
router.get(
    "/getByName/:name",
    authenticate,
    authorize(1),
    employeeController.getEmployeeByName
);

// Update Employee
router.put(
    "/update/:id",
    authenticate,
    authorize(1),
    employeeController.updateEmployeeById
);

// Delete Employee
router.delete(
    "/delete/:id",
    authenticate,
    authorize(1),
    employeeController.deleteById
);

// Activate / Deactivate Employee
router.patch(
    "/status/:id",
    authenticate,
    authorize(1),
    employeeController.statusChangeById
);

module.exports = router;