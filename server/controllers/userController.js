const userService = require('../services/userService');

const addUser = async (req,res)=>{
    try{
        const data = await userService.addUser(req.body);
        res.status(200).json({
            data : data
        })
    }catch(err){
        res.status(400).json({  
            error:err
        })
    }
}

module.exports = {addUser}