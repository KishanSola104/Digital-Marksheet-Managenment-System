const express = require('express');
const router = express.Router();

const employeeController = require('../controllers/employeeController');

router.post('/', employeeController.createEmployee);

router.get('/', employeeController.getEmployee);

router.get('/get/:id', employeeController.getEmployeeById);

router.get('/getByName/:name', employeeController.getEmployeeByName);

router.put('/update/:id', employeeController.updateEmployeeById);

router.delete('/delete/:name',employeeController.deletebyName);

router.patch('/status/:id',employeeController.statusChangeById);

module.exports = router;