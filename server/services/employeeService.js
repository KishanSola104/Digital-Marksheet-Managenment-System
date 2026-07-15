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

    getEmployeeById: async (name) => {
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
    }
};

module.exports = employeeService;