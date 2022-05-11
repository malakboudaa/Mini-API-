const mark = require('../Models/MarkModel')
const pv = require('../Models/PvModel')
const commentPv = require ('../Models/CommentPvModel')
const commentMark = require ('../Models/CommentMarkModel')
const student = require('../Models/StudentModel')
const bcrypt = require('bcrypt')
const jwt = require ('jsonwebtoken')

const asyncHandler = require("express-async-handler")

// Registration process 

const registerStud = (req,res , next)=> {
  bcrypt.hash(req.body.pwd, 10, function (err,hashedPass){
    if (err){
      res.json({error : err
      })
    }
    let stud = new student({
      fname: req.body.fname,
      lname: req.body.lname,
      email : req.body.email,
      pwd : hashedPass
    })
    stud.save()
    .then(stud => {
      res.json ({
        message : "Hello , new Student added",
      })
    })
    .catch(error => {
      res.json({
        message : "An error has occured "
      })
    })
  })
}


// LogIn process 
const logInStud = (req,res,next )=> {
  var username = req.body.username 
  var password = req.body.password
  student.findOne ({ $or: [{email: username}, {fname : username}]})
  .then (student =>{
    if (student){
      bcrypt.compare(password, student.pwd, function(err,result ){
        if (err){
          res.status(500).json       
        }
        if(result){
          let token = jwt.sign({name : student.lname}, 'verySecretValue',{expiresIn: '1h'})
          res.json({
            message : 'Login succefully',
            token
          })
        }else {
          res.json({
            message : 'password does not match ,failed'
          })
        }
      })

    }else {
      res.json({
        message : 'no student found'
      })
    }
  })
}

   // GET /api/mark DONE

const indexMark = asyncHandler(
    async (req,res)=>{
      const mrk = await mark.find()
      res.json(mrk)
    })

      // GETONE /api/mark:id DONE 
const showMark= asyncHandler(
    async (req,res)=>{
      const mrk = await mark.findById(req.params.id)
      if (! mrk){
        res.status(500)
        throw new Error('Teacher does not exist')
      }else {
        res.json(mrk)
      }
  })

     // GET /api/pv DONE

const indexPv = asyncHandler(
    async (req,res)=>{
      const pV = await pv.find()
      res.json(pV)
    })

    
//POST /api/commentPv DONE

const editCmntPv = asyncHandler(
  async (req,res)=>{
     const cmntPv = await commentPv.create(
      {
      StudentId : req.body.StudentId,
      Content : req.body.Content,
      
       }
     )
     res.status(201).json(cmntPv) 
})


//POST /api/commentMark DONE

const editCmntMark = asyncHandler(
  async (req,res)=>{
     const cmntMark = await commentMark.create(
      {
      StudentId : req.body.StudentId,
      Content : req.body.Content,
      Module : req.body.Module
      
       }
     )
     res.status(201).json(cmntMark) 
})



  module.exports = {
      indexMark,
      showMark,
      indexPv,
      editCmntPv,
      editCmntMark,
      registerStud,
      logInStud,
  }