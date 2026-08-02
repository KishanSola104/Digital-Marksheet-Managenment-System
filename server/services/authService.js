const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const School = require("../models/schoolModel");
const Employee = require("../models/employeeModel");
const User = require("../models/userModel");

const generateSchoolId = require("../helpers/generateSchoolId");
const generateUserId = require("../helpers/generateUserId");
const generatePassword = require("../helpers/generatePassword");

const { generateEmployeeToken, generateSchoolToken } = require("../config/jwt");

const { sendEmail } = require("./emailService");

const schoolRegistrationTemplate = require("./emailTemplates/schoolRegistrationTemplate");
const employeeCredentialsTemplate = require("./emailTemplates/employeeCredentialsTemplate");
const forgotPasswordTemplate = require("./emailTemplates/forgotPasswordTemplate");

/* import role model */
const Role = require("../models/roleModel");

const registerSchool = async (data) => {
  try {
    const {
      // School
      schoolName,
      email,
      phone,
      address,
      establishedYear,
      website,

      // Admin
      firstName,
      lastName,
      gender,
      dob,
      mobileNumber,
      qualification,
      experience,
      joiningDate,
      department,
      salary,
      designation,
      role,
    } = data;

    // console.log(data);
    // ============================
    // Check Existing School
    // ============================

    const existingSchool = await School.findOne({
      email: email.toLowerCase(),
    });

    if (existingSchool) {
      throw new Error("School already registered with this email.");
    }

    // ============================
    // Check Existing Employee
    // ============================

    const existingEmployee = await Employee.findOne({
      email: email.toLowerCase(),
    });

    if (existingEmployee) {
      throw new Error("Employee already exists with this email.");
    }

    // ============================
    // Generate IDs
    // ============================

    const schoolId = await generateSchoolId(schoolName);

    const employeeId = await generateUserId(schoolName, firstName, lastName);

    const userId = employeeId;

    // ============================
    // Generate Passwords
    // ============================

    const schoolPassword = generatePassword(schoolName);

    const adminPassword = generatePassword(firstName);

    // ============================
    // Hash Passwords
    // ============================

    const hashedSchoolPassword = await bcrypt.hash(schoolPassword, 10);

    const hashedAdminPassword = await bcrypt.hash(adminPassword, 10);

    // ============================
    // Create School
    // ============================

    const school = await School.create({
      schoolId,
      schoolName,
      email: email.toLowerCase(),
      password: hashedSchoolPassword,
      phone,
      address,
      establishedYear,
      website,
    });

    // ============================
    // Create Employee
    // ============================

    const employee = await Employee.create({
      employeeId,

      schoolId: school._id,

      firstName,
      lastName,

      gender,
      dob,

      email: email.toLowerCase(),

      mobileNumber,

      qualification,
      experience,

      joiningDate,

      department,

      salary,

      designation,

      status: "Active",
    });

    // find admin role
    const adminRole = await Role.findOne({
      roleCode: "ADMIN",
    });

    if (!adminRole) {
      throw new Error("Administrator role not found.");
    }

    // ============================
    // Create User
    // ============================
    const user = await User.create({
      employeeId: employee._id,

      userId,

      userName: `${firstName} ${lastName}`,

      roleIds: [adminRole._id],

      password: hashedAdminPassword,

      accountStatus: "Active",
    });
    // ============================
    // Send Email
    // ============================
    // Send School Credentials
    // ============================

    await sendEmail({
      to: school.email,

      subject: "School Registration Successful",

      html: schoolRegistrationTemplate({
        schoolName: school.schoolName,

        schoolId: school.schoolId,

        password: schoolPassword,

        loginUrl: `${process.env.CLIENT_URL}/school-login`,
      }),
    });

    // ============================
    // Send Admin Credentials
    // ============================

    await sendEmail({
      to: employee.email,

      subject: "Administrator Account Created",

      html: employeeCredentialsTemplate({
        employeeName: `${employee.firstName} ${employee.lastName}`,

        employeeId: employee.employeeId,

        userId: user.userId,

        password: adminPassword,

        designation: employee.designation,

        loginUrl: `${process.env.CLIENT_URL}/login`,
      }),
    });

    // ============================
    // Response
    // ============================

    console.log("Registration completed successfully");

    return {
      success: true,

      message: "School registered successfully.",

      school: {
        schoolId: school.schoolId,

        schoolName: school.schoolName,

        email: school.email,
      },

      admin: {
        userId: user.userId,

        employeeId: employee.employeeId,

        name: user.userName,

        email: employee.email,
      },
    };
  } catch (error) {
    throw error;
  }
};

/**
 * School Login
 */
const schoolLogin = async (data) => {
  try {
    const { schoolId, password } = data;

    // ==========================
    // Find School
    // ==========================

    const school = await School.findOne({
      schoolId: schoolId.toUpperCase(),
    });

    if (!school) {
      throw new Error("Invalid School ID or Password.");
    }

    // ==========================
    // Check School Status
    // ==========================

    if (school.status !== "Active") {
      throw new Error("School account is inactive.");
    }

    // ==========================
    // Compare Password
    // ==========================

    const isPasswordCorrect = await bcrypt.compare(password, school.password);

    if (!isPasswordCorrect) {
      throw new Error("Invalid School ID or Password.");
    }

    // ==========================
    // Generate JWT
    // ==========================

    const token = generateSchoolToken({
      _id: school._id,
      schoolId: school.schoolId,
    });

    // ==========================
    // Return Response
    // ==========================

    return {
      success: true,

      message: "School login successful.",

      token,

      school: {
        id: school._id,

        schoolId: school.schoolId,

        schoolName: school.schoolName,

        email: school.email,

        phone: school.phone,

        address: school.address,

        establishedYear: school.establishedYear,

        website: school.website,

        status: school.status,
      },
    };
  } catch (error) {
    throw error;
  }
};

/**
 * Verify School Session
 */
const verifySchool = async (user) => {
  try {
    // ==========================
    // Find School
    // ==========================

    const school = await School.findById(user._id);

    if (!school) {
      throw new Error("School not found.");
    }

    // ==========================
    // Check School Status
    // ==========================

    if (school.status !== "Active") {
      throw new Error("School account is inactive.");
    }

    // ==========================
    // Return Response
    // ==========================

    return {
      success: true,

      message: "School verified successfully.",

      school: {
        id: school._id,

        schoolId: school.schoolId,

        schoolName: school.schoolName,

        email: school.email,

        phone: school.phone,

        address: school.address,

        establishedYear: school.establishedYear,

        website: school.website,

        status: school.status,

        createdAt: school.createdAt,

        updatedAt: school.updatedAt,
      },
    };
  } catch (error) {
    throw error;
  }
};

/**
 * Employee Login
 */
const employeeLogin = async (data) => {
  try {
    const { userId, password, role } = data;

    // ==========================
    // Find User
    // ==========================

    const user = await User.findOne({
      userId: userId.toUpperCase(),
    })
      .populate("employeeId")
      .populate("roleIds");

    if (!user) {
      throw new Error("Invalid User ID or Password.");
    }

    // ==========================
    // Check User Status
    // ==========================

    if (user.accountStatus !== "Active") {
      throw new Error("Your account is inactive.");
    }

    // ==========================
    // Compare Password
    // ==========================

    const isPasswordCorrect = await bcrypt.compare(
      password,
      user.password
    );

    if (!isPasswordCorrect) {
      throw new Error("Invalid User ID or Password.");
    }

    // ==========================
    // Check Selected Role
    // ==========================

    const selectedRole = user.roleIds.find(
      (r) => r.roleCode === role
    );

    if (!selectedRole) {
      throw new Error(
        "You are not authorized to login with the selected role."
      );
    }

    // ==========================
    // Generate JWT
    // ==========================

    const token = generateEmployeeToken({
      _id: user.employeeId._id,

      employeeId: user.employeeId.employeeId,

      schoolId: user.employeeId.schoolId,

      roleId: selectedRole._id,

      roleCode: selectedRole.roleCode,
    });

    // ==========================
    // Return Response
    // ==========================

    return {
      success: true,

      message: "Login successful.",

      token,

      user: {
        id: user._id,

        userId: user.userId,

        userName: user.userName,

        accountStatus: user.accountStatus,

        role: {
          id: selectedRole._id,
          code: selectedRole.roleCode,
          name: selectedRole.roleName,
        },
      },

      employee: {
        id: user.employeeId._id,

        employeeId: user.employeeId.employeeId,

        firstName: user.employeeId.firstName,

        lastName: user.employeeId.lastName,

        designation: user.employeeId.designation,

        department: user.employeeId.department,

        schoolId: user.employeeId.schoolId,

        email: user.employeeId.email,
      },
    };
  } catch (error) {
    throw error;
  }
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
  try {
    const { userId } = data;

    // ==========================
    // Find User
    // ==========================

    const user = await User.findOne({
      userId: userId.toUpperCase(),
    }).populate("employeeId");

    if (!user) {
      throw new Error("User not found.");
    }

    // ==========================
    // Generate Temporary Password
    // ==========================

    const temporaryPassword = generatePassword(user.employeeId.firstName);

    // ==========================
    // Hash Password
    // ==========================

    const hashedPassword = await bcrypt.hash(temporaryPassword, 10);

    // ==========================
    // Update Password
    // ==========================

    user.password = hashedPassword;

    await user.save();

    // ==========================
    // Send Email
    // ==========================

    await sendEmail({
      to: user.employeeId.email,
      subject: "DMMS - Temporary Password for Your Account",
      html: forgotPasswordTemplate({
        employeeName: `${user.employeeId.firstName} ${user.employeeId.lastName}`,
        password: temporaryPassword,
      }),
    });

    // ==========================
    // Response
    // ==========================

    return {
      success: true,

      message: "A temporary password has been sent to your registered email.",
    };
  } catch (error) {
    throw error;
  }
};

/**
 * Change Password
 */
const changePassword = async (user, data) => {
  try {
    const { currentPassword, newPassword } = data;

    // ==========================
    // Find User
    // ==========================
    const existingUser = await User.findOne({
      employeeId: user.id,
    });

    if (!existingUser) {
      throw new Error("User not found.");
    }

    // ==========================
    // Compare Current Password
    // ==========================

    const isPasswordCorrect = await bcrypt.compare(
      currentPassword,
      existingUser.password,
    );

    if (!isPasswordCorrect) {
      throw new Error("Current password is incorrect.");
    }

    // ==========================
    // Prevent Same Password
    // ==========================

    const isSamePassword = await bcrypt.compare(
      newPassword,
      existingUser.password,
    );

    if (isSamePassword) {
      throw new Error(
        "New password cannot be the same as the current password.",
      );
    }

    // ==========================
    // Hash New Password
    // ==========================

    existingUser.password = await bcrypt.hash(newPassword, 10);

    await existingUser.save();

    // ==========================
    // Response
    // ==========================

    return {
      success: true,

      message: "Password changed successfully.",
    };
  } catch (error) {
    throw error;
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
