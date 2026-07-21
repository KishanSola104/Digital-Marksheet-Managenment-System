const mongoose = require("mongoose");

const roleSchema = new mongoose.Schema(
    {
        roleId: {
            type: Number,
            required: true,
            unique: true,
        },

        roleName: {
            type: String,
            required: true,
            unique: true,
            enum: [
                "SUPER_ADMIN",
                "HEAD_MASTER",
                "ASSIS_TEACHER",
                "CLEARK"
            ],
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Role", roleSchema);