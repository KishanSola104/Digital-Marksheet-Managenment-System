const sectionService = require('../services/sectionService');

//Create Section
const createSection = async (req,res) => {
    try{
        const section = await sectionService.createSection(req.body);
        res.status(201).json(section);
    }catch(error){
        res.status(500).json({
            success:false,
            message:error.message
        });
    }
};

module.exports = {createSection};