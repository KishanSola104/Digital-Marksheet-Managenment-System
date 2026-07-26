const Role = require("../Models/roleModel");

const addRole = async (roleData) => {
    try {

        const { roleId, roleName } = roleData;

        const existingRole = await Role.findOne({
            $or: [
                { roleId },
                { roleName }
            ]
        });

        if (existingRole) {
            return {
                success: false,
                message: "Role already exists."
            };
        }

        const role = await Role.create({
            roleId,
            roleName
        });

        return {
            success: true,
            message: "Role added successfully.",
            role
        };

    } catch (error) {
        throw new Error(`Error While Creating Role: ${error.message}`);
    }
};

//Get All Roles
const getAllRole = async () => {
    try{
        const role = await Role.find();
        return{
            success:true,
            message:"All Role Fetched Successfully",
            data:role
        };
    }catch(error){
        throw new Error(`Error while Fetching Roles: ${error.message}`);
    }
};

//Get Role By Id
const getRole = async(id)=>{
    try {

        const role = await Role.findOne({ roleId: id });

        if (!role) {
            return {
                success: false,
                message: "Role not found."
            };
        }

        return {
            success: true,
            id:role.roleId,
            message : role.roleName
        };

    } catch (error) {
        throw error;
    }
    
}

module.exports = {
    addRole, getAllRole, getRole
};