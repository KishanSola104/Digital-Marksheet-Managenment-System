const express = require('express');
const router = express.Router();
const adminDashboardController = require('../controllers/adminDashboardController');
const authenticate = require('../middlewares/authMiddleware');
const authorize = require('../middlewares/authorize');

//Get All Stats
router.get('/:academicYearId',authenticate, authorize("ADMIN"), adminDashboardController.getDashboardStats);

module.exports = router;