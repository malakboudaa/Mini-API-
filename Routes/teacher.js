const { Router } = require("express");
const express = require('express');
const router = express.Router();
const { 
    editMark, 
    updateMark,
    destroyMark,
    indexComntMark
  } = require('../Controllers/TeacherController');

// Mark's Routes 
router.post('/mark', editMark),
router.put('/mark/:id', updateMark),
router.delete('/mark/:id', destroyMark)
router.get('/commentMark', indexComntMark)

module.exports = router