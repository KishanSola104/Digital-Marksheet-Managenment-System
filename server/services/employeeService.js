const employeeModel = require('../models/employeeModel');
const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
const generateUserId = require("../helpers/generateUserId");
const schoolModel = require('../models/schoolModel');
const employeeCredentialsTemplate = require("./emailTemplates/employeeCredentialsTemplate");
const { sendEmail } = require("./emailService");
const generatePassword = require("../helpers/generatePassword");
const userModel = require("../models/userModel");
const employeeService = {

    //Create Employee
    createEmployee: async (employeeData, schoolId) => {

        try {
            const password = generatePassword(employeeData.firstName);
            const hashedPassword = await bcrypt.hash(password, 10);
            const school = await schoolModel.findOne({
                _id: schoolId,
            })
            const schoolName = school.schoolName;
            const employeeId = await generateUserId(schoolName, employeeData.firstName, employeeData.lastName);
            const employee = new employeeModel(employeeData);
            employee.employeeId = employeeId;
            employee.schoolId = schoolId;
            await employee.save();
            await sendEmail({
                to: employee.email,

                subject: "Account Created",

                html: employeeCredentialsTemplate({

                    employeeName: `${employee.firstName} ${employee.lastName}`,

                    employeeId: employee.employeeId,

                    userId: employee.employeeId,

                    designation: employee.designation,

                    password: password,

                    loginUrl: `${process.env.CLIENT_URL}/login`,
                }),
            });

            // console.log(employeeData.role);

            user = await User.create({
                userId: employee.employeeId,
                userName: employee.firstName,
                password: hashedPassword,
                roleIds: employeeData.role,
                employeeId: employee._id,
                status: "Active",
            });


            return {
                success: true,
                message: 'Employee created successfully',
                employee: employee
            }
        } catch (error) {
            throw new Error(`Error creating employee: ${error.message}`);
        }
    },

    //Get All Employee by SchoolId
    getEmployee: async (schoolId) => {
        try {

            if (!schoolId) {
                throw new Error("School Id is not found");
            }

            const employees = await employeeModel.find({ schoolId: schoolId }).populate("schoolId", "schoolName email phone");

            return {
                success: true,
                message: "Employees Fetched by SchoolId",
                employees: employees
            };

        } catch (error) {
            throw new Error(`Error Fetching: ${error.message}`);
        }
    },

    //Get by Id
    getEmployeeById: async (userId, schoolId) => {
        try {
            const employee = await employeeModel.findOne({ employeeId: userId, schoolId: schoolId });

            if (!employee) {
                throw new Error("Employee Not Found");
            }

            return {
                success: true,
                message: "Employee Fetched",
                employee: employee
            };

        } catch (error) {
            throw new Error(`Error While Fetching Employee: ${error.message}`);
        }
    },

    //Get by Name
    getEmployeeByName: async (name, schoolId) => {
        try {

            const employee = await employeeModel.findOne({ firstName: name, schoolId: schoolId });
            if (!employee) {
                throw new Error("Employee Not Found");
            }
            return {
                success: true,
                message: "Employee Fetched",
                employee: employee
            };
        } catch (error) {
            throw new Error(`Error While Fetching Employee: ${error.message}`);
        }
    },

    //Update by Id
    updateEmployeeById: async (id, updateData, schoolId) => {
        try {
            const employee = await employeeModel.findOneAndUpdate(
                { employeeId: id, schoolId: schoolId },
                { $set: updateData },
                { returnDocument: 'after' }
            );
            if (!employee) {
                throw new Error("Employee Not Found");
            }
            return {
                success: true,
                message: "Employee Updated Successfully",
                data: employee
            };
        } catch (error) {
            throw new Error(`Error While Updating Employee: ${error.message}`);
        }
    },

    //Delete By Id
    deleteById: async (id, schoolId) => {
        try {

            const employee = await employeeModel.findOneAndDelete({ employeeId: id, schoolId: schoolId });

            if (!employee) {
                throw new Error("Employee Not Found");
            }

            return {
                success: true,
                message: "Employee Deleted Successfully"
            };

        } catch (error) {
            throw new Error(`Error While Deleting Employee: ${error.message}`);
        }
    },

    //Status Change Active or Deactive
    statusChangeById: async (id, schoolId) => {
        try {
            const employee = await employeeModel.findOne({ employeeId: id, schoolId: schoolId });
            if (!employee) {
                throw new Error("Employee Not Found");
            }
            employee.status = employee.status === "Active" ? "Inactive" : "Active";
            await employee.save();
            return {
                success: true,
                message: "Employee Status Changed Successfully",
                data: employee
            };
        } catch (error) {
            throw new Error(`Error Changing Status: ${error.message}`);
        }
    },

    // Get Employee By Email
    getEmployeesByEmail: async (email, schoolId) => {
        try {
            const employee = await employeeModel.findOne({ email: email, schoolId: schoolId });

            if (!employee) {
                throw new Error("Employee Not Found");
            }

            return {
                success: true,
                message: "Employee Fetched",
                employee: employee
            };
        } catch (error) {
            throw new Error(`Error While Fetching Employee By Email: ${error.message}`);
        }
    },

    //Get Employee By Role
    getEmployeesByRole: async (roleId, schoolId) => {
        try {
            //Find users having this role
            const users = await userModel.find({roleIds: roleId}).select("employeeId");

            if (users.length === 0) {
                return {
                    success: false,
                    message: "No employees found for this role."
                };
            }

            //Get employee IDs
            const employeeIds = users.map(user => user.employeeId);

            //Find employees belonging to this school
            const employees = await employeeModel.find({
                _id: { $in: employeeIds },
                schoolId: schoolId
            });

            if (employees.length === 0) {
                return {
                    success: false,
                    message: "No employees found for this role in this school."
                };
            }

            return {
                success: true,
                employees
            };

        } catch (error) {
            throw new Error(`Error While Fetching By Role: ${error.message}`);
        }
    }
};

module.exports = employeeService;