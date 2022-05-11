const { Router } = require("express");
const express = require('express');
const router = express.Router();
const { 
    indexMark,
    showMark,
    indexPv,
    editCmntPv,
    editCmntMark,
    registerStud,
    logInStud
  } = require('../Controllers/StudentController');

// Mark's Routes 

router.get('/mark',indexMark),
router.get('/mark/:id',showMark),
router.get('/pv',indexPv),
router.post('/commentPv',editCmntPv),
router.post('/commentMark',editCmntMark),
router.post('/register',registerStud),
router.post('/login',logInStud),




module.exports = router