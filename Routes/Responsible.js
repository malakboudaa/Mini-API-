const { Router } = require("express");
const express = require('express');
const router = express.Router();
const { 
    //students
    indexStud,
    editStud,
    showStud,
    updateStud,
    destroyStud,
    //teachers 
    indexTeach,
    showTeach,
    editTeach,
    updateTeach,
    destroyTeach,
    //PV
    editPv,
    //cmntpv
    indexCmntPv,
  } = require('../Controllers/ResponsibleController');

// Student's Routes 
router.get('/students', indexStud),
router.get('/students/:id', showStud),
router.post('/students', editStud),
router.put('/students/:id', updateStud),
router.delete('/students/:id', destroyStud),
// Teacher's Routes 
router.get('/teachers', indexTeach),
router.get('/teachers/:id', showTeach),
router.post('/teachers', editTeach),
router.put('/teachers/:id', updateTeach),
router.delete('/teachers/:id', destroyTeach),
// PV's Routes 
router.post('/pv', editPv),
// commentPV's Routes 
router.get('/commentPv', indexCmntPv),


module.exports = router