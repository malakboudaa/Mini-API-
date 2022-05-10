const mongoose = require ('mongoose');

const ModSchema = mongoose.Schema(
    {
        StudentId: {
            type : String,
            required : true
        },
        Module: {
            type : String,
            required: true, 
        },
        Mark : {
            type:Number,
            require:true
        },

    },
    
)
module.exports = mongoose.model("Module", ModSchema)
