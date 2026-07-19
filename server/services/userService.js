const User = require("../models/userModel");
const employeeService = require("./employeeService");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const login = async (loginData) => {
  try {
    const { email, password } = loginData;

    const data = await employeeService.getEmployeeByEmail(email);

    if (!data || !data.employee) {
      return {
        success: false,
        message: "Invalid Email",
      };
    }

    const employee = data.employee;

    const isMatch = await bcrypt.compare(password, employee.password);

    if (!isMatch) {
      return {
        success: false,
        message: "Invalid Password",
      };
    }

    let user = await User.findOne({
      employeeId: employee._id,
    });

    if (!user) {
      user = await User.create({
        userName: employee.firstName,
        employeeId: employee._id,
        userId: employee.employeeId,
        status: "Active",
      });
    } else {
      user.status = "Active";
      await user.save();
    }

    console.log("Employee Object:", employee);
    console.log("Employee Role:", employee.role);

    // JWT Token
    const token = jwt.sign(
      {
        employeeId: employee.employeeId,
        email: employee.email,
        role: employee.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "8h",
      },
    );

    return {
      success: true,
      message: "Login Successful",
      token,
      user: {
        id: user._id,
        userName: user.userName,
        employeeId: employee.employeeId,

        // Authentication & Authorization
        role: employee.role,

        // Display Purpose
        designation: employee.designation,

        status: user.status,
      },
    };
  } catch (error) {
    throw error;
  }
};

module.exports = {
  login,
};
