const express = require('express');
const router = express.Router();
const sectionController = require('../controllers/sectionController');
const authenticate = require('../middlewares/authMiddleware');
const authorize = require('../middlewares/authorize');

router.post('/',authenticate,authorize("ADMIN","HEAD_TEACHER"),sectionController.createSection);

module.exports = router;