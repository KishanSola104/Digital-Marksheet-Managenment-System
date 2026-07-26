const mongoose = require("mongoose");

const sectionSchema = new mongoose.Schema(
    {
        sectionId:{type:String, unique:true, required:true},
        
        classId:{type:String, required:true},
        
        section:{type:String, required:true},
        
        classTeacherId:{type:String, required:true},
        
        totalStudents:{type:Number, required:true},
        
        status:{type:String, enum:["Active","Inactive"], default:"Active"}
    },
    {
        timestamps:true
    }
)

module.exports = mongoose.model("Section",sectionSchema);