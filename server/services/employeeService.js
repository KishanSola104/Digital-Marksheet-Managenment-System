
const employeeModel = require('../models/employeeModel');
const bcrypt = require("bcrypt");

const employeeService = {

    //Create Employee
    createEmployee: async (employeeData) => {
        try {
            const employee = new employeeModel(employeeData);
            const hashedPassword = await bcrypt.hash(employee.password, 10);
            employee.password = hashedPassword;
            await employee.save();
            return {
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
            return{
                message:"Employees Fetched",
                employees:employees
            };
        }catch(error){
            throw new Error(`Error Fetching: ${error.message}`);
        }
    },

    //Get by Id
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

    //Get by Name
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

    //Update by Id
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
    },

    //Delete By Name
    deletebyName : async(name)=>{
        try{
            
            const employee = await employeeModel.deleteOne({firstName:name});
            if(!employee){
                throw new Error("Employee Not Found");
            }
            return{
                message:"Employee Deleted Successfully",
            };
        }catch(error){
            throw new Error(`Error While Fetching Employee: ${error.message}`);
        }
    }
};

module.exports = employeeService;