const mongoose = require("mongoose");

const schoolConfigSchema = new mongoose.Schema(
    {
        configId:{type: String,unique:true,required:true},

        schoolName:{type: String, required: true},

        schoolId:{type: String, unique: true, required: true},

        currentAdmissionYear:{type: String, required:true},

        address:{type: String, required: true},

        contactNumber:{type: String, required: true},

        email:{type: String, unique: true, required: true},

        principalName:{type: String, required: true},

        currentAcademicYearId:{type: mongoose.Schema.Types.ObjectId, ref: "AcademicYear", required: true}
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("SchoolConfig", schoolConfigSchema);