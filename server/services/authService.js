const bcrypt = require("bcrypt");

const School = require("../models/schoolModel");

const generateSchoolId = require("./helpers/generateSchoolId");
const generatePassword = require("./helpers/generatePassword");

// Later
// const emailService = require("./emailService");


/**
 * Register a New School
 */
const registerSchool = async (schoolData) => {

    const {
        schoolName,
        email,
        phone,
        address,
        establishedYear,
        website
    } = schoolData;

    // 1. Check if email already exists
    const existingSchool = await School.findOne({ email });

    if (existingSchool) {
        throw new Error("School is already registered with this email.");
    }

    // 2. Generate School ID
    const schoolId = await generateSchoolId(schoolName);

    // 3. Generate Password
    const generatedPassword = generatePassword(schoolName);

    // 4. Hash Password
    const hashedPassword = await bcrypt.hash(generatedPassword, 10);

    // 5. Create School
    const school = await School.create({
        schoolId,
        schoolName,
        email,
        password: hashedPassword,
        phone,
        address,
        establishedYear,
        website,
    });

    // 6. TODO
    // Send Email with credentials

    return {
        success: true,
        message: "School registered successfully.",
        schoolId: school.schoolId,
        email: school.email,

        // Temporary
        generatedPassword
    };
};

/**
 * School Login
 */
const schoolLogin = async (loginData) => {
    throw new Error("schoolLogin() not implemented yet.");
};

/**
 * Verify School Session
 */
const verifySchool = async (school) => {
    throw new Error("verifySchool() not implemented yet.");
};

/**
 * Employee Login
 */
const employeeLogin = async (loginData) => {
    throw new Error("employeeLogin() not implemented yet.");
};

/**
 * Logout
 */
const logout = async () => {
    return {
        success: true,
        message: "Logged out successfully.",
    };
};

/**
 * Forgot Password
 */
const forgotPassword = async (data) => {
    throw new Error("forgotPassword() not implemented yet.");
};

/**
 * Change Password
 */
const changePassword = async (data) => {
    throw new Error("changePassword() not implemented yet.");
};

module.exports = {
    registerSchool,
    schoolLogin,
    verifySchool,
    employeeLogin,
    logout,
    forgotPassword,
    changePassword,
};