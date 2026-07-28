const mongoose = require("mongoose");

const classSchema = new mongoose.Schema(
    {
        schoolId:{type:String, required:true},
        
        classId: {type:String, unique:true, required:true},
        
        standard: {type:String, required:true},
        
        academicYearId: {type:String, required:true},
        
        totalStudents: {type:Number, required:true, min:0},
        
        status: {type:String, enum: ["Active","Inactive"], default:"Active"}
    },
    {
        timestamps:true
    }
)

module.exports = mongoose.model("Class", classSchema);