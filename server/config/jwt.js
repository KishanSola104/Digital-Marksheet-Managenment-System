const jwt = require("jsonwebtoken");

/**
 * Generate JWT for School
 */
const generateSchoolToken = (school) => {
    return jwt.sign(
        {
            schoolId: school.schoolId,
            id: school._id,
            type: "school",
        },
        process.env.JWT_SECRET,
        {
            expiresIn: "8h",
        }
    );
};

/**
 * Generate JWT for Employee
 */
const generateEmployeeToken = (employee) => {
    return jwt.sign(
        {
            employeeId: employee.employeeId,
            id: employee._id,
            roleIds: employee.role,
            type: "employee",
        },
        process.env.JWT_SECRET,
        {
            expiresIn: "8h",
        }
    );
};

/**
 * Verify JWT
 */
const verifyToken = (token) => {
    return jwt.verify(token, process.env.JWT_SECRET);
};

module.exports = {
    generateSchoolToken,
    generateEmployeeToken,
    verifyToken,
};