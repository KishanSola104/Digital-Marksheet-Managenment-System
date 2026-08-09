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

//Get All Section By Class Id
const getAllSection = async (req,res) => {
    try{
        const sections = await sectionService.getAllSection(req.params.classId);
        res.status(200).json(sections);
    }catch(error){
        res.status(400).json({
            success:false,
            message:error.message
        });
    }
};

//Update Section By SectionId
const updateById = async (req,res) => {
    try{
        const section = await sectionService.updateById(req.params.sectionId,req.body);
        res.status(200).json(section);
    }catch(error){
        res.status(400).json({
            success:false,
            message:error.message
        });
    }
};

//Change Status By sectionId
const changeStatusById = async (req,res) => {
    try{
        const section = await sectionService.changeStatusById(req.params.sectionId);
        res.status(200).json(section);
    }catch(error){
        res.status(400).json({
            success:false,
            message:error.message
        });
    }
};

module.exports = {createSection, getAllSection, updateById, changeStatusById};