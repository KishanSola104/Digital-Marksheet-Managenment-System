const mongoose = require("mongoose");

const subjectSchema = new mongoose.Schema(
    {
        subjectId:{type:String, unique:true, required:true},
        
        subjectName:{type:String, unique:true, required:true},
        
        status:{type:String, enum:["Active","Inactive"], default:"Active"}
    },
    {
        timestamps:true
    }
)

module.exports = mongoose.model("Subject",subjectSchema);