const roleService = require("../services/roleService");

//Create Role
const addRole = async (req, res) => {
    try {

        const result = await roleService.addRole(req.body);

        if (!result.success) {
            return res.status(400).json(result);
        }

        return res.status(201).json(result);

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

//Get All Role
const getAllRole = async (req,res) => {
    try{
        const role = await roleService.getAllRole();
        res.status(200).json(role);
    }catch{
        res.status(400).json({
            success:false,
            message:error.message
        });
    }
};

//Get Role By Id
const getRole = async (req,res) =>{
    try {
        
        const result = await roleService.getRole(req.params.id);

        if (!result.success) {
            return res.status(400).json(result);
        }

        return res.status(201).json(result);

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}
module.exports = {
    addRole, getAllRole, getRole
};