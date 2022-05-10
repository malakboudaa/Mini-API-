const Students = require('../Models/StudentModel')
const teachers = require('../Models/TeacherModel')

const asyncHandler = require("express-async-handler")


// GET /api/students DONE

const indexStud = asyncHandler(
    async (req,res)=>{
      const stud = await Students.find()
      res.json(stud)
    })

//POST /api/students DONE

const editStud = asyncHandler(
    async (req,res)=>{
       const stud = await Students.create(
        {
        fname : req.body.fname,
        lname : req.body.lname,
        email : req.body.email,
        pwd : req.body.pwd
         }
       )
       res.status(201).json(stud) 
  })

  // GETONE /api/students:id DONE 
const showStud = asyncHandler(
    async (req,res)=>{
      const stud = await Students.findById(req.params.id)
      if (! stud){
        res.status(500)
        throw new Error('Student does not exist')
      }else {
        res.json(stud)
      }
  })

  //UPDATE /api/students:id DONE 
const updateStud = asyncHandler(
    async (req,res)=>{
   const stud = await Students.findById(req.params.id)
   if (! stud){
     res.status(500)
     throw new Error('Do not exist')
   }
   const updateStudd = await Students.findByIdAndUpdate(
     req.params.id, req.body, {
       new : true
     })
  
   res.status(200).json(updateStudd)
  })

  
// DELTE /api/students:id DONE
const destroyStud = asyncHandler(
    async (req,res)=>{
      const stud = await Students.findById(req.params.id)
   if (! stud){
     res.status(500)
     throw new Error('Do not exist')
   }
   await stud.remove()
   res.status(200).json({
     id: req.params.id,
     message: " this student has been deleted"
   } )
  })

  //_____________________________________________________________________


  // GET /api/teachers DONE

const indexTeach = asyncHandler(
    async (req,res)=>{
      const teach = await teachers.find()
      res.json(teach)
    })

//POST /api/teachers DONE

const editTeach = asyncHandler(
    async (req,res)=>{
       const teach = await teachers.create(
        {
        fname : req.body.fname,
        lname : req.body.lname,
        email : req.body.email,
        pwd : req.body.pwd,
        Module: req.body.Module
         }
       )
       res.status(201).json(teach) 
  })

  // GETONE /api/teachers:id DONE 
const showTeach= asyncHandler(
    async (req,res)=>{
      const teach = await teachers.findById(req.params.id)
      if (! teach){
        res.status(500)
        throw new Error('Teacher does not exist')
      }else {
        res.json(teach)
      }
  })

  //UPDATE /api/teachers:id DONE 
const updateTeach = asyncHandler(
    async (req,res)=>{
   const teach = await teachers.findById(req.params.id)
   if (! teach){
     res.status(500)
     throw new Error('Do not exist')
   }
   const updateTeachh = await teachers.findByIdAndUpdate(
     req.params.id, req.body, {
       new : true
     })
  
   res.status(200).json(updateTeachh)
  })

  
// DELTE /api/teachers:id DONE
const destroyTeach = asyncHandler(
    async (req,res)=>{
      const teach = await teachers.findById(req.params.id)
   if (! teach){
     res.status(500)
     throw new Error('Do not exist')
   }
   await teach.remove()
   res.status(200).json({
     id: req.params.id,
     message: " this teacher has been deleted"
   } )
  })


    module.exports = {
        //Student
        indexStud,
        editStud,
        showStud,
        updateStud,
        destroyStud,
        //Teacher
        indexTeach,
        editTeach,
        showTeach,
        updateTeach,
        destroyTeach

       
      };