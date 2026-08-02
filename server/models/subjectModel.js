const mongoose = require("mongoose");

const subjectSchema = new mongoose.Schema(
    {
        subjectId: { type: String, unique: true, required: true },

        subjectCode: { type: String, unique: true, required: true, trim: true, uppercase: true },

        subjectName: { type: String, unique: true, required: true, trim: true },

        description: { type: String, default: null, trim: true },

        passingMarks: { type: Number, required: true, min: 0 },

        status: { type: String, enum: ["Active", "Inactive"], default: "Active" }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model("Subject", subjectSchema);