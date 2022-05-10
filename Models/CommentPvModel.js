const mongoose = require ('mongoose');

const CommentPvSchema = mongoose.Schema(
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
module.exports = mongoose.model("Reclamation", CommentPvSchema)
