const mongoose = require("mongoose");

const schoolConfigSchema = new mongoose.Schema(
    {
        schoolId:{type: String, unique: true, required: true},

        schoolName:{type: String, required: true},

        address:{type: String, required: true},

        contactNumber:{type: String, required: true},

        email:{type: String, unique: true, required: true},

        websiteURL:{type: String, default: null, trim: true},

        schoolLogo:{type: String, default: null, trim: true}
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("SchoolConfig", schoolConfigSchema);