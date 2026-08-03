const employeeModel = require('../models/employeeModel');
const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
const generateUserId = require("../helpers/generateUserId");
const schoolModel = require('../models/schoolModel');
const employeeCredentialsTemplate = require("./emailTemplates/employeeCredentialsTemplate");
const { sendEmail } = require("./emailService");
const generatePassword = require("../helpers/generatePassword");
const User = require("../models/userModel");
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

                    password : password,

                    loginUrl: `${process.env.CLIENT_URL}/login`,
                }),
            });

            // console.log(employeeData.role);

            user = await User.create({
                userId: employee.employeeId,
                userName: employee.firstName,
                password: hashedPassword,
                // might possible to chnage from id to names
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

    //Get All Employee
    getEmployee: async () => {
        try {

            const employees = await employeeModel.find();
            return {
                success: true,
                message: "Employees Fetched",
                employees: employees
            };
        } catch (error) {
            throw new Error(`Error Fetching: ${error.message}`);
        }
    },

    //Get by Id
    getEmployeeById: async (userId) => {
        try {
            const employee = await employeeModel.findOne({ employeeId: userId });
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
    getEmployeeByName: async (name) => {
        try {

            const employee = await employeeModel.findOne({ firstName: name });
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
    updateEmployeeById: async (id, updateData) => {
        try {
            const employee = await employeeModel.findOneAndUpdate(
                { employeeId: id },
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
    deleteById: async (id) => {
        try {

            const employee = await employeeModel.findOneAndDelete({
                employeeId: id
            });

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
    statusChangeById: async (id, status) => {
        try {
            const employee = await employeeModel.findOne({ employeeId: id });
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
    getEmployeesByEmail: async (email) => {
        try {
            const employee = await employeeModel.findOne({ email: email });

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
    getEmployeesByRole: async (roleId) => {
        try {
            const employees = await employeeModel.find({ role: roleId });

            if (employees.length === 0) {
                return {
                    success: false,
                    message: "No employees found for this role."
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