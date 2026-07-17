const express = require("express");
const router = express.Router();

const employeeController = require("../controllers/employeeController");
const authenticate = require("../middlewares/authMiddleware");
const authorize = require("../middlewares/authorize");


router.post(
    "/",
    authenticate,
    authorize("ADMIN"),
    employeeController.createEmployee
);


router.get(
    "/",
    authenticate,
    authorize("ADMIN", "HEAD"),
    employeeController.getEmployee
);


router.get(
    "/get/:id",
    authenticate,
    authorize("ADMIN", "HEAD"),
    employeeController.getEmployeeById
);


router.get(
    "/getByName/:name",
    authenticate,
    authorize("ADMIN", "HEAD"),
    employeeController.getEmployeeByName
);


router.put(
    "/update/:id",
    authenticate,
    authorize("ADMIN"),
    employeeController.updateEmployeeById
);


router.delete(
    "/delete/:id",
    authenticate,
    authorize("ADMIN"),
    employeeController.deleteById
);


router.patch(
    "/status/:id",
    authenticate,
    authorize("ADMIN"),
    employeeController.statusChangeById
);

module.exports = router;