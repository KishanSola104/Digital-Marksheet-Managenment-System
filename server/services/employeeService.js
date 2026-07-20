const { statusChangeById } = require('../controllers/employeeController');
const employeeModel = require('../models/employeeModel');
const bcrypt = require("bcrypt");

function generateFiveDigitNumber() {
    const min = 10000; // smallest 5-digit number
    const max = 99999; // largest 5-digit number
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const employeeService = {

    //Create Employee
    createEmployee: async (employeeData) => {
        try {
            const employee = new employeeModel(employeeData);
            if(employee.password === undefined){
                employee.password = generateFiveDigitNumber();
                // console.log(employee.password);
            }
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
            return {
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
                message: "Employee Fetched",
                employee: employee
            };
        } catch (error) {
            throw new Error(`Error: ${error.message}`);
        }
    },

};


module.exports = employeeService;