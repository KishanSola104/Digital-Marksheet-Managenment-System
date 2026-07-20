const User = require("../models/userModel");
const employeeService = require("./employeeService");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const login = async (loginData) => {
  try {
    const { id, password, role } = loginData;

    const data = await employeeService.getEmployeeById(id);

    if (!data || !data.employee) {
      return {
        success: false,
        message: "Invalid Employee ID",
      };
    }

    const employee = data.employee;


    if (employee.role !== role) {
      return {
        success: false,
        message: "Please select your designated role",
      };
    }

  
    let user = await User.findOne({
      employeeId: employee._id,
    });

    if (!user) {

      const hashedPassword = await bcrypt.hash(password, 10);
      employee.password = hashedPassword;
      await employee.save();

      user = await User.create({
        userId: employee.employeeId,
        userName: employee.firstName,
        employeeId: employee._id,
        status: "Active",
      });
      // console.log("Set Password");
    }

    else {

      const isMatch = await bcrypt.compare(
        password,
        employee.password
      );

      if (!isMatch) {
        return {
          success: false,
          message: "Invalid Password",
        };
      }

      user.status = "Active";
      await user.save();
    }

    // Generate JWT
    const token = jwt.sign(
      {
        employeeId: employee.employeeId,
        id: employee._id,
        role: employee.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "8h",
      }
    );
    // console.log("No Set Password");
    return {
      success: true,
      message: "Login Successful",
      token,
      user: {
        id: user._id,
        userId: user.userId,
        userName: user.userName,

        // Authentication
        role: employee.role,

        // Display Purpose
        designation: employee.designation,
        department: employee.department,

        status: user.status,
      },
    };

  } catch (error) {
    throw error;
  }
};



module.exports = {
  login
};
