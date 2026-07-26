const express = require('express');
const router = express.Router();
const classSubjectController = require('../controllers/classSubjectController');
const authenticate = require('../middlewares/authMiddleware');
const authorize = require('../middlewares/authorize');

//Create Class Subject
router.post('/', authenticate ,authorize(1,2), classSubjectController.createClassSubject);

//Get All Class Subject
router.get('/', authenticate ,authorize(1,2), classSubjectController.getAllClassSubject);

//Get Class Subject By ClassSubjectID
router.get('/:id', authenticate ,authorize(1,2), classSubjectController.getById);

//Update Class Subject By ClassSubjectID
router.put('/:id', authenticate ,authorize(1,2), classSubjectController.updateById);

//Delete ClassSubject By ClassSubjectId
router.delete('/:id', authenticate ,authorize(1,2), classSubjectController.deleteById);

//Change the Status Active or Inactive
router.patch('/status/:id', authenticate ,authorize(1,2), classSubjectController.changeStatusById);

module.exports = router;