const mongoose = require("mongoose");

const examSchema = new mongoose.Schema(
    {
        examId:{type:String, unique:true, required:true},
        
        examName:{type:String, unique:true, required:true},
        
        classId:{type:mongoose.Schema.Types.ObjectId, ref:"Class", required:true},
        
        academicYearId:{type:mongoose.Schema.Types.ObjectId, ref:"AcademicYear", required:true},
        
        startDate:{type:Date, required:true},
        
        endDate:{type:Date, required:true},
        
        resultPublished:{type:Boolean, default:false},
        
        status:{type:String, enum:["Active", "Inactive"], default:"Active"}
    },
    {
        timestamps:true
    }
)

module.exports = mongoose.model("Exam",examSchema);