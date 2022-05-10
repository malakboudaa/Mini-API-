const mongoose = require ('mongoose');

const MarkSchema = mongoose.Schema(
    {
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
module.exports = mongoose.model("Mark", MarkSchema)