const Marks = require('../Models/MarkModel')
const asyncHandler = require("express-async-handler")

//POST /api/Mark DONE

const editMark = asyncHandler(
    async (req,res)=>{
       const Mark = await Marks.create(
        {
        Mark: req.body.Mark,
        Module: req.body.Module,
         }
       )
       res.status(201).json(Mark) 
  })

    //UPDATE /api/students:id DONE 
    
    const updateMark = asyncHandler(
    async (req,res)=>{
   const mrk = await Marks.findById(req.params.id)
   if (! mrk){
     res.status(500)
     throw new Error('Do not exist')
   }
   const updateMarkk = await Marks.findByIdAndUpdate(
     req.params.id, req.body, {
       new : true
     })
  
   res.status(200).json(updateMarkk)
  })




module.exports = {
    editMark,
    updateMark,

  };