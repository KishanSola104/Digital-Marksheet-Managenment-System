const employeeModel = require('../models/employeeModel');
const mongoose = require('mongoose');
const bcrypt = require("bcrypt");

const employeeService = {

    //Create Employee
    createEmployee: async (employeeData) => {
        // mail functionality to be added
        try {
            const employee = new employeeModel(employeeData);
            await employee.save();
            return {
                success:true,
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
                success:true,
                message: "Employees Fetched",
                employees: employees
            };
        } catch (error) {
            throw new Error(`Error Fetching: ${error.message}`);
        }
    },

    //Get by Id
    getEmployeeById: async (id) => {
        try {
            const employee = await employeeModel.findOne({ employeeId: id });
            if (!employee) {
                throw new Error("Employee Not Found");
            }
            return {
                success:true,
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
                success:true,
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
            const employee = await employeeModel.updateOne(
                { employeeId: id },
                { $set: updateData }
            );
            if (!employee) {
                throw new Error("Employee Not Found");
            }

            //const updatedEmployee = await employeeModel.findOne({employeeId:id});
            return {
                success:true,
                message: "Employee Updated Successfully"
                //employee:updatedEmployee
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
                success:true,
                message: "Employee Deleted Successfully"
            };
    
        } catch (error) {
            throw new Error(`Error While Deleting Employee: ${error.message}`);
        }
    },

    //Status Change Active or Deactive
    statusChangeById: async (id, status) => {
        try {
            const employee = await employeeModel.updateOne(
                { employeeId: id },
                { $set: { status: status } }
            );
            if (!employee) {
                throw new Error("Employee Not Found");
            }
            return {
                success:true,
                message: "Employee Status Changed Successfully"
            };
        } catch (error) {
            throw new Error(`Error Changing Status: ${error.message}`);
        }
    },

    // Get Employee By Email
    getEmployeeByEmail: async (email) => {
        try {
            const employee = await employeeModel.findOne({ email });

            if (!employee) {
                throw new Error("Employee Not Found");
            }

            return {
                success:true,
                message: "Employee Fetched",
                employee: employee
            };
        } catch (error) {
            throw new Error(`Error: ${error.message}`);
        }
    },  

    //Get Employee By Role
    getEmployeesByRole : async (roleId) => {
        try {
            const employees = await employeeModel.find({
                roleId:new mongoose.Schema.Types.ObjectId(roleId)}).populate("roleId","roleName");
            
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