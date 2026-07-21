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

//Delete By Id
const deleteById = async (req, res) => {
    try {
        const result = await employeeService.deleteById(req.params.id);

        res.status(200).json({
            message: result.message
        });

    } catch (error) {
        res.status(400).json({
            message: error.message
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
};

const getEmployeesByRole = async (req, res) => {
    try {

        const { roleId } = req.params;

        const result = await employeeService.getEmployeesByRole(Number(roleId));

        if (!result.success) {
            return res.status(404).json(result);
        }

        return res.status(200).json(result);

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    createEmployee, getEmployee, getEmployeeById,getEmployeesByRole, getEmployeeByName, updateEmployeeById, deleteById, statusChangeById
};