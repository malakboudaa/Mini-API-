const mongoose = require ('mongoose');

const EnsSchema = mongoose.Schema(
    {
        fname: {
            type : String,
            required : true
        },
        lname: {
            type : String,
            required: true, 
        },
        email: {
            type : String,
            required : true
        },
        pwd: {
            type : String,
            required : true
        },
        Module : {
            type:String,require:true
        },

    },
    
)
module.exports = mongoose.model("Enseignant", EnsSchema)
