const studentService = require('../services/studentService');

//Create Student
const createStudent = async(req,res) => {
    try{
        const student = await studentService.createStudent(req.body);
        res.status(201).json({
            success: true,
            data: student
        });
    }catch(error){
        res.status(400).json({
        });
    }
};

module.exports = {
    createStudent
};