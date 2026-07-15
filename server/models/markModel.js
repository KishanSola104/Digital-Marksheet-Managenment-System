const mongoose = require("mongoose");

const markSchema = new mongoose.Schema(
    {
        markId:{type:String, unique:true, required:true},

        studentId:{type:mongoose.Schema.Types.ObjectId, ref:"Student", required:true},
        
        examId:{type:mongoose.Schema.Types.ObjectId, ref:"Exam", required:true},
        
        classId:{type:mongoose.Schema.Types.ObjectId, ref:"Class", required:true},
        
        academicYearId:{type:mongoose.Schema.Types.ObjectId, ref:"AcademicYear", required:true},
        
        subjects:[
            {
            
                subjectId:{type:mongoose.Schema.Types.ObjectId, ref:"Subject", required:true},
            
                marks:{type:Number, required:true, min:0},
            
                grade:{type:String, required:true}
            }
        ],
        
        totalMarks:{type:Number, required:true, min:0},
        
        percentage:{type:Number, required:true, min:0, max:100},
        
        behavior:{type:String, required:true},
        
        isLocked:{type:Boolean, default:false},
    },
    {
        timestamps:true
    }
)

module.exports = mongoose.model("Mark", markSchema);