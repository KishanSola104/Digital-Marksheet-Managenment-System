const express = require("express");
const router = express.Router();
const authenticate = require("../middlewares/authMiddleware");
const authorize = require("../middlewares/authorize");

const studentController = require('../controllers/studentController');

router.post('/', authenticate,
    authorize(1), studentController.createStudent);

router.get('/', authenticate,
    authorize(1,2), studentController.getStudent);

router.get('/get/:id', authenticate,
    authorize(1,2), studentController.getStudentById);

router.get('/getByName/:name', authenticate,
    authorize(1,2), studentController.getStudentByName);

router.put('/update/:id', authenticate,
    authorize(1), studentController.updateStudentById);

router.delete('/delete/:name', authenticate,
    authorize(1), studentController.deleteStudentByName);

router.patch('/status/:id', authenticate,
    authorize(1), studentController.statusChangeById);

module.exports = router;