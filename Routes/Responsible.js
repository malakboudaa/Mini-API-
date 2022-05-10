const { Router } = require("express");
const express = require('express');
const router = express.Router();
const { 
    indexStud,
    editStud,
    showStud,
    updateStud,
    destroyStud,
    indexTeach,
    showTeach,
    editTeach,
    updateTeach,
    destroyTeach
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


module.exports = router