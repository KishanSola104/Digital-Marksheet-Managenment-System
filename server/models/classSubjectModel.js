const mongoose = require("mongoose");

const classSubjectSchema = new mongoose.Schema(
    {
        classSubjectId:{type:String, unique:true, required:true},
        
        classId:{type:String, required:true},
        
        sectionId:{type:String, required:true},
        
        subjectId:{type:String, required:true},
        
        subjectTeacherId:{type:String, required:true},
        
        credit:{type:Number, required:true},
        
        passingMarks:{type:Number, required:true},
        
        status:{type:String, enum:["Active","Inactive"], default:"Active"}
    },
    {
        timestamps:true
    }
)

module.exports = mongoose.model("ClassSubject",classSubjectSchema);