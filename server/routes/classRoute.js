const express = require('express');
const router = express.Router();
const classController = require('../controllers/classController');
const authenticate = require('../middlewares/authMiddleware');
const authorize = require('../middlewares/authorize');

//Create Class
router.post('/', authenticate, authorize(), classController.createClass);

//Get All Class
router.get('/', authenticate, authorize(1,2), classController.getAllClass);

//Get Class By ClassId
router.get('/:id', authenticate, authorize(1,2), classController.getById);

//Update Class By ClassId
router.put('/:id', authenticate, authorize(1), classController.updateById);

//Change the status of Class by ClassId
router.patch('/status/:id', authenticate, authorize(1), classController.changeStatusById);

//Delete Class By ClassId
router.delete('/:id', authenticate, authorize(1), classController.deleteById);


module.exports = router;

