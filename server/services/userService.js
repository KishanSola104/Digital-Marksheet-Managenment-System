const userModel = require("../models/userModel");
const employeeService = require('../services/employeeService');
const bcrypt = require("bcrypt");

const addUser = async (userData) =>{
    try{
        const data = await employeeService.getEmployeeByName(userData.userName);
        const user = new userModel(userData);
        user.employeeId = data.employee._id;
        user.userId = data.employee.employeeId;
        const verify = await bcrypt.compare(userData.password, data.employee.password)
        
        if(verify === true){
            user.hashPassword= data.employee.password;
            console.log(user);
            await user.save();
            return {
                message : "User Added"
            }
        }
        else{
            return {
                message : "Password Incorrect"
            }
        }
        
        
    }
    catch(error){
        return {
            message : "UserName not Found"
        };
    }
};


module.exports = {addUser}