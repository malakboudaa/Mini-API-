const mongoose = require ('mongoose');

const MarkSchema = mongoose.Schema(
    {
        StudentId: {
            type : String,
            required : true
        },
        Mark: {
            type : Number,
            required : true
        },
        Module: {
            type : String,
            required : true
        },
    
    },
    
)
module.exports = mongoose.model("marks", MarkSchema)