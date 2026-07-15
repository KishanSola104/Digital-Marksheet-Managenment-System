const express = require('express');
const router = express.Router();

const employeeController = require('../controllers/employeeController');

router.post('/create', employeeController.createEmployee);

router.get('/get', employeeController.getEmployee);

router.get('/get/:id', employeeController.getEmployeeById);

router.get('get/:name', employeeController.getEmployeeByName);


module.exports = router;