const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        userId: {type:String, unique:true, required:true},

        userName : {type:String, require:true},

        RoleId: {
            type: [Number],
            default: []
        },
        
        employeeId: {type:mongoose.Schema.Types.ObjectId, ref: "Employee", required:true, unique:true},

        password: {
            type: String,
            required: true,
        },

        
        status: {type:String, enum: ["Active", "Inactive", "Active But Unavailable"], default: "Active"},
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model("User", userSchema);