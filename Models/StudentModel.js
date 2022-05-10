const mongoose = require ('mongoose');

const StudentSchema = mongoose.Schema(
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
    },
    
)
module.exports = mongoose.model("Student", StudentSchema)
