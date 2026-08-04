const express = require('express');
const router = express.Router();
const subjectController = require('../controllers/subjectController');
const authenticate = require('../middlewares/authMiddleware');
const authorize = require('../middlewares/authorize');

//Create Subject
router.post('/', authenticate,authorize("ADMIN","HEAD_TEACHER"), subjectController.createSubject);

//Get All Subject
router.get('/', authenticate, authorize("ADMIN","HEAD_TEACHER"), subjectController.getAllSubject);

//Get Subject By SubjectId
router.get('/:id', authenticate, authorize("ADMIN","HEAD_TEACHER"), subjectController.getById);

//Update Subject By SubjectId
router.put('/:id', authenticate, authorize("ADMIN","HEAD_TEACHER"), subjectController.updateById);

//Delete Subject By SubjectId
router.delete('/:id', authenticate, authorize("ADMIN","HEAD_TEACHER"), subjectController.deleteById);

//Change the status of Subject By SubjectId
router.patch('/status/:id', authenticate, authorize("ADMIN","HEAD_TEACHER"), subjectController.changeStatusById);


module.exports = router;
