const classSubjectService = require('../services/classSubjectService');

//Create Class Subject
const createClassSubject = async (req,res) => {
    try{
        const classSub = await classSubjectService.createClassSubject(req.body);
        res.status(201).json(classSub);
    }catch(error){
        res.status(400).json({
            success:false,
            message:error.message
        });
    }
};

module.exports = {createClassSubject};