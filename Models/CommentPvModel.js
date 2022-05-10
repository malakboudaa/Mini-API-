const mongoose = require ('mongoose');

const RecPvSchema = mongoose.Schema(
    {
        StudentId: {
            type : String,
            required : true
        },
        Contenu: {
            type : String,
            required : true
        },
       
    },
    
)
module.exports = mongoose.model("Reclamation", RecPvSchema)
