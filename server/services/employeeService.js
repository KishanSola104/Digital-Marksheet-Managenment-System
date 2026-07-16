const employeeModel = require('../models/employeeModel');

const employeeService = {
    createEmployee: async (employeeData) => {
        try {
            const employee = new employeeModel(employeeData);
            await employee.save();
            return {
                message: 'Employee created successfully',
                employee: employee
            }
        } catch (error) {
            throw new Error(`Error creating employee: ${error.message}`);
        }
    },

    getEmployee: async () => {
        try {
            
            const employees = await employeeModel.find();
            return{
                message:"Employees Fetched",
                employees:employees
            };
        }catch(error){
            throw new Error(`Error Fetching: ${error.message}`);
        }
    },

    getEmployeeById: async (id) => {
        try{
            const employee = await employeeModel.findOne({employeeId:id});
            if(!employee){
                throw new Error("Employee Not Found");
            }
            return{
                message:"Employee Fetched",
                employee: employee
            };
        }catch(error){
            throw new Error(`Error While Fetching Employee: ${error.message}`);
        }
    },

    getEmployeeByName: async (name) => {
        try{
            const employee = await employeeModel.findOne({firstName:name});
            if(!employee){
                throw new Error("Employee Not Found");
            }
            return{
                message:"Employee Fetched",
                employee: employee
            };
        }catch(error){
            throw new Error(`Error While Fetching Employee: ${error.message}`);
        }
    },

    updateEmployeeById: async (id,updateData) => {
        try{
            const employee = await employeeModel.updateOne(
                {employeeId:id},
                {$set:updateData}
            );
            if(!employee){
                throw new Error("Employee Not Found");
            }

            //const updatedEmployee = await employeeModel.findOne({employeeId:id});
            return{
                message:"Employee Updated Successfully"
                //employee:updatedEmployee
            };
        }catch(error){
            throw new Error(`Error While Updating Employee: ${error.message}`);
        }
    }
};

module.exports = employeeService;