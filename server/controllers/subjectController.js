const subjectService = require('../services/subjectService');

//Create Subject
const createSubject = async (req,res) => {
    try{
        const subject = await subjectService.createSubject(req.body);
        res.status(201).json(subject);
    }catch(error){
        res.status(400).json({
            success:false,
            message:error.message
        });
    }
};

//Get All Subject
const getAllSubject = async (req,res) => {
    try{
        const subject = await subjectService.getAllSubject();
        res.status(201).json(subject);
    }catch(error){
        res.status(400).json({
            success:false,
            message:error.message
        });
    }
};

//Get Subject By SubjectID
const getById = async (req,res) => {
    try{
        const subject = await subjectService.getById(req.params.id);
        res.status(201).json(subject);
    }catch(error){
        res.status(400).json({
            success:false,
            message:error.message
        });
    }
};

//Update Subject By SubjectID
const updateById = async (req,res) => {
    try{
        const subject = await subjectService.updateById(req.params.id,req.body);
        res.status(201).json(subject);
    }catch(error){
        res.status(400).json({
            success:false,
            message:error.message
        });
    }
};

//Delete Subject By Subject Id
const deleteById = async (req,res) => {
    try{
        const subject = await subjectService.deleteById(req.params.id);
        res.status(201).json(subject);
    }catch(error){
        res.status(400).json({
            success:false,
            message:error.message
        });
    }
};

//Change the Status of Subject By SubjectId
const changeStatusById = async (req,res) => {
    try{
        const subject = await subjectService.changeStatusById(req.params.id);
        res.status(201).json(subject);
    }catch(error){
        res.status(400).json({
            success:false,
            message:error.message
        });
    }
};


module.exports = {createSubject, getAllSubject, getById, updateById, deleteById, changeStatusById};