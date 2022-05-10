const mongoose = require ('mongoose');
const uniqueValidator = require ('mongoose-unique-validator')

const RespSchema = mongoose.Schema(
    {
        email: {
            type : String,
            required : true,
            unique : true
        },
        pwd: {
            type : String,
            required : true
        },
    },
    
);
RespSchema.plugin(uniqueValidator)
module.exports = mongoose.model("Responsable", RespSchema)
