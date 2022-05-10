const { Router } = require("express");
const express = require('express');
const router = express.Router();
const { 
 
     
    destroy} = require('../Controllers/StudentController');




router.delete('/:id', destroy)

module.exports = router