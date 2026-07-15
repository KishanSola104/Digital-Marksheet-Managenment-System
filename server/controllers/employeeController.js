const employeeService = require('../services/employeeService');

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

const deletebyName = async (req,res)=>{
    try{
        const employee = await employeeService.deletebyName(req.params.name);
        res.status(200).json({
            messsage:"Deleted",
        });
    }catch(error){
        res.status(400).json({
            
        });
    }
}

module.exports = {
    createEmployee, getEmployee, getEmployeeById, getEmployeeByName,deletebyName
};