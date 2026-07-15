const mongoose = require("mongoose");

const academicYearSchema = new mongoose.Schema(
    {
        academicYearId:{type:String, unique:true, required:true},
        
        year:{type:String, unique:true, required:true},
        
        startDate:{type:Date, required:true},
        
        endDate:{type:Date, required:true},
        
        isCurrent:{type:Boolean, default:false},
        
        status:{type:String, enum:["Active","Inactive"], default:"Active"}
    },
    {
        timestamps:true
    }
)

module.exports = mongoose.model("AcademicYear", academicYearSchema);