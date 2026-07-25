const User = require("../models/userModel");
const employeeService = require("./employeeService");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {getRole} = require("./roleService")

const login = async (loginData) => {
  try {
    const { id, password, cnfPass, role } = loginData;

    const data = await employeeService.getEmployeeById(id);

    if (!data || !data.employee) {
      return {
        success: false,
        message: "Invalid Employee ID",
      };
    }
    
    const employee = data.employee;
    if (!employee.role.includes(role)) {
      return {
          success: false,
          message: "Please select Valid Role"
      };
  }
    
    let user = await User.findOne({
      employeeId: employee._id,
    });
    
    if (!user) {
      if (password !== cnfPass) {
        return {
          success: false,
          message: "Confirm pass and Password dont match"
        }
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      user = await User.create({
        userId: employee.employeeId,
        userName: employee.firstName,
        password:hashedPassword,
        roleIds:employee.role,
        employeeId: employee._id,
        status: "Active",
      });
      // console.log(user);
    }
    
    else {
      
      const isMatch = await bcrypt.compare(
        password,
        user.password
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

    const roleName = await getRole(role);
    // Generate JWT
    const token = jwt.sign(
      {
          employeeId: employee.employeeId,
          id: employee._id,
          roleIds: role
      },
      process.env.JWT_SECRET,
      {
          expiresIn:"8h"
      });
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
        role: roleName.message,

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
