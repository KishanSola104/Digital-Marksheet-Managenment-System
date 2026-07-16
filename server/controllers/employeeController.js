const employeeService = require('../services/employeeService');

//Create Employee
const createEmployee = async (req, res) => {
    try {
        const employee = await employeeService.createEmployee(req.body);
        res.status(201).json({
            success: true,
            data: employee
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};


//Fetch All
const getEmployee = async (req,res) => {
    try{
        const employee = await employeeService.getEmployee();
        res.status(201).json({
            success: true,
            data: employee
        });
    } catch(error){
        res.status(400).json({
        });
    }
};

//Fetch By Id
const getEmployeeById = async (req,res) => {
    try{
        const employee = await employeeService.getEmployeeById(req.params.id);
        res.status(201).json({
            success: true,
            data: employee
        });
    }catch(error){
        res.status(400).json({
        });
    }
};

//Fetch By Name
const getEmployeeByName = async (req,res) => {
    try{
        const employee = await employeeService.getEmployeeByName(req.params.name);
        res.status(201).json({
            success:true,
            data: employee
        });
    }catch(error){
        res.status(400).json({
            
        });
    }
};

//Update By Id
const updateEmployeeById = async (req,res) => {
    try{
        const updateEmployee = await employeeService.updateEmployeeById(req.params.id,req.body);
        res.status(201).json({
            success:true,
            data: updateEmployee
        });
    }catch(error){
        res.status(400).json({
        });
    }
};

//Delete By Name
const deletebyName = async (req,res) => {
    try{
        const employee = await employeeService.deletebyName(req.params.name);
        res.status(200).json({
            messsage:"Deleted Successfully",
        });
    }catch(error){
        res.status(400).json({
            
        });
    }
};

//Status Change Active or Deactive
const statusChangeById = async (req,res) => { 
    try{
        const employee = await employeeService.statusChangeById(
            req.params.id,
            req.body.status
        );
        res.status(201).json({
            message:"Status Changed",
        });
    }catch(error){
        res.status(400).json({
        });
    }
}
module.exports = {
    createEmployee, getEmployee, getEmployeeById, getEmployeeByName, updateEmployeeById, deletebyName, statusChangeById
};