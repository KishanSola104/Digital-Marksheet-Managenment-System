const mongoose = require("mongoose");

const classSchema = new mongoose.Schema(
    {
        classId: {type:String, unique:true, required:true},
        
        standard: {type:String, required:true},
        
        academicYearId: {type:mongoose.Schema.Types.ObjectId, ref: "AcademicYear", required:true},
        
        totalStudents: {type:Number, required:true, min:0},
        
        status: {type:String, enum: ["Active","Inactive"], default:"Active"}
    },
    {
        timestamps:true
    }
)

module.exports = mongoose.model("Class", classSchema);