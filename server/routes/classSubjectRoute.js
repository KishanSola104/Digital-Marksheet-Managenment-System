const express = require('express');
const router = express.Router();
const classSubjectController = require('../controllers/classSubjectController');
const authenticate = require('../middlewares/authMiddleware');
const authorize = require('../middlewares/authorize');

//Create Class Subject
router.post('/', authenticate ,authorize(1,2), classSubjectController.createClassSubject);

module.exports = router;