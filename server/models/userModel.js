const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        userId: {type:String, unique:true, required:true},
        
        employeeId: {type:mongoose.Schema.Types.ObjectId, ref: "Employee", required:true, unique:true},
        
        password: {type:String, required:true},
        
        isActive: {type:Boolean, default: true},
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model("User", userSchema);