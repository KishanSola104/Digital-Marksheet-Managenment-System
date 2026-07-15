const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema(
    {
        employeeId: {type:String, unique:true, required:true},
        
        firstName: {type:String, required:true},
        
        lastName: {type:String, required:true},
        
        gender: {type: String, enum: ["Male", "Female", "Other"], required:true},
        
        dob: {type:Date, required:true},
        
        email: {type:String, unique:true, required:true},
        
        mobileNumber: {type:String, unique:true, required:true},
        
        address: {type:String, required:true},
        
        qualification: {type:String, required:true},
        
        experience: {type:String, required:true},
        
        joiningDate: {type:Date, required:true},
        
        designation: {type:String, required:true},
        
        department: {type:String, required:true},
        
        salary: {type:Number, required:true},
        
        status: {type:String, enum: ["Active", "Inactive", "Active But Unavailable"], default:"Active"}
    },
    {
        timestamps:true
    }
)

module.exports = mongoose.model("Employee", employeeSchema);