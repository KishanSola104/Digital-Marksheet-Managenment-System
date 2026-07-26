const express = require('express');
const router = express.Router();
const academicYearController = require('../controllers/academicYearController');
const authenticate = require('../middlewares/authMiddleware');
const authorize = require('../middlewares/authorize');

//Create Academic Year
router.post('/', authenticate,authorize(1), academicYearController.createAcademicYear);

//Get All Academic Year
router.get('/', authenticate, authorize(1), academicYearController.getAllYear);

module.exports = router;
