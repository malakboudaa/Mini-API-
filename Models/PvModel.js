const mongoose = require ('mongoose');

const PVSchema = mongoose.Schema(
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
        Moyenne : {
            type:Number,
            require:true
        }

    },
    
)
module.exports = mongoose.model("PV", PVSchema)












