const Marks = require('../Models/MarkModel')
const asyncHandler = require("express-async-handler")
const commentMark = require ('../Models/CommentMarkModel')

//POST /api/Mark DONE

const editMark = asyncHandler(
    async (req,res)=>{
       const mrk = await Marks.create(
        {
        StudentId: req.body.StudentId,
        Mark: req.body.Mark,
        Module: req.body.Module,
         }
       )
       res.status(201).json(mrk) 
  })

//UPDATE /api/mark:id DONE 
    
    const updateMark = asyncHandler(
    async (req,res)=>{
   const mrk = await Marks.findById(req.params.id)
   if (! mrk){
     res.status(500)
     throw new Error('Do not exist')
   }
   const update_Mark = await Marks.findByIdAndUpdate(
     req.params.id, req.body, {
       new : true
     })
  
   res.status(200).json(update_Mark)
  })

  
//DELETE /api/mark:id DONE 
  const destroyMark = asyncHandler(
    async (req,res)=>{
      const mrk = await Marks.findById(req.params.id)
   if (! mrk){
     res.status(500)
     throw new Error('Do not exist')
   }
   await Marks.remove()
   res.status(200).json({
     id: req.params.id,
     message: " this Mark has been deleted"
   } )
  })

// GET /api/commentMark DONE

const indexComntMark= asyncHandler(
  async (req,res)=>{
    const cmntMarkk = await commentMark.find()
    res.json(cmntMarkk)
  })



module.exports = {
    editMark,
    updateMark,
    destroyMark,
    indexComntMark,
    

  };