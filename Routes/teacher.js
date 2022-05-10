const { Router } = require("express");
const express = require('express');
const router = express.Router();
const { 
    editMark, 
    updateMark
  } = require('../Controllers/TeacherController');

// Mark's Routes 
router.post('/mark', editMark),
router.put('/mark/:id', updateMark),


module.exports = router