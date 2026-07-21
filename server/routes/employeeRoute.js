const express = require("express");
const router = express.Router();

const employeeController = require("../controllers/employeeController");
const authenticate = require("../middlewares/authMiddleware");
const authorize = require("../middlewares/authorize");

// Create Employee
router.post(
    "/",
    authenticate,
    // authorize("SUPER_ADMIN"),
    employeeController.createEmployee
);

// Get All Employees
router.get(
    "/",
    authenticate,
    authorize("SUPER_ADMIN"),
    employeeController.getEmployee
);

// Get Employee By Employee ID
router.get(
    "/get/:id",
    authenticate,
    authorize("SUPER_ADMIN"),
    employeeController.getEmployeeById
);

// Get Employee By Name
router.get(
    "/getByName/:name",
    authenticate,
    authorize("SUPER_ADMIN"),
    employeeController.getEmployeeByName
);

// Update Employee
router.put(
    "/update/:id",
    authenticate,
    authorize("SUPER_ADMIN"),
    employeeController.updateEmployeeById
);

// Delete Employee
router.delete(
    "/delete/:id",
    authenticate,
    authorize("SUPER_ADMIN"),
    employeeController.deleteById
);

// Activate / Deactivate Employee
router.patch(
    "/status/:id",
    authenticate,
    authorize("SUPER_ADMIN"),
    employeeController.statusChangeById
);

module.exports = router;