const express = require("express");
const router = express.Router();

const studentController = require('../controllers/studentController');

router.post('/', studentController.createStudent);

router.get('/', studentController.getStudent);

router.get('/get/:id', studentController.getStudentById);

router.get('/getByName/:name', studentController.getStudentByName);

router.put('/update/:id', studentController.updateStudentById);

router.delete('/delete/:name', studentController.deleteStudentByName);

router.patch('/status/:id', studentController.statusChangeById);

module.exports = router;