const express = require('express');
const router = express.Router();
const Controller = require('../controllers/user');

// const validateToken = require('../utils/validateToken');
// router.post('/register', validateToken, Controller.registerUser);

router.post('/submit', Controller.submit);
router.post('/register', Controller.register);
router.post('/login', Controller.login);
router.get('/getContact', Controller.getContact);
router.post('/appointment', Controller.appointment);
router.get('/showAppointment', Controller.showAppointment);


module.exports = router;