const authService = require("../services/authService");

/**
 * Register School
 */
const registerSchool = async (req, res) => {
    try {
        const result = await authService.registerSchool(req.body);  
        return res.status(201).json(result);

    } catch (error) {

        return res.status(400).json({
            success: false,
            message: error.message,
        });

    }
};

/**
 * School Login
 */
const schoolLogin = async (req, res) => {
    try {

        const result = await authService.schoolLogin(req.body);

        return res.status(200).json(result);

    } catch (error) {

        return res.status(401).json({
            success: false,
            message: error.message,
        });

    }
};

/**
 * Verify School Session
 */
const verifySchool = async (req, res) => {
    try {

        const result = await authService.verifySchool(req.user);

        return res.status(200).json(result);

    } catch (error) {

        return res.status(401).json({
            success: false,
            message: error.message,
        });

    }
};

/**
 * Employee Login
 */
const employeeLogin = async (req, res) => {
    try {

        const result = await authService.employeeLogin(req.body);

        return res.status(200).json(result);

    } catch (error) {

        return res.status(401).json({
            success: false,
            message: error.message,
        });

    }
};

/**
 * Logout
 */
const logout = async (req, res) => {
    try {

        const result = await authService.logout();

        return res.status(200).json(result);

    } catch (error) {

        return res.status(400).json({
            success: false,
            message: error.message,
        });

    }
};

/**
 * Forgot Password
 */
const forgotPassword = async (req, res) => {
    try {

        const result = await authService.forgotPassword(req.body);

        return res.status(200).json(result);

    } catch (error) {

        return res.status(400).json({
            success: false,
            message: error.message,
        });

    }
};


/**
 * Change Password
 */
const changePassword = async (req, res) => {
    try {

        const result = await authService.changePassword(
            req.user,
            req.body
        );

        return res.status(200).json(result);

    } catch (error) {

        return res.status(400).json({
            success: false,
            message: error.message,
        });

    }
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