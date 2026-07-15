const express = require('express');
const router = express.Router();

const employeeController = require('../controllers/employeeController');

router.post('/', employeeController.createEmployee);

router.get('/', employeeController.getEmployee);

router.get('/:id', employeeController.getEmployeeById);

router.get('/getByName/:name', employeeController.getEmployeeByName);

router.delete('/:name',employeeController.deletebyName);

module.exports = router;