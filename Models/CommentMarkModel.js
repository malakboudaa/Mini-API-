const mongoose = require ('mongoose');

const CommentMarkSchema = mongoose.Schema(
    {
        StudentId: {
            type : String,
            required : true
        },
        Content: {
            type : String,
            required : true
        },
        Module:{
            type : String,
            required : true
        }  
    },
    
)
module.exports = mongoose.model("CommentMark", CommentMarkSchema)
