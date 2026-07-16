const studentModel = require('../models/studentModel');
const bcrypt = require('bcrypt');

const studentService = {

    //Create Student
    createStudent: async (studentData) => {
        try {
            const student = new studentModel(studentData);
            await student.save();
            return {
                message: 'Student Added Successfully',
                student: student
            }
        }catch(error){
            throw new Error(`Error adding student: ${error.message}`);
        }
    }
};

module.exports = studentService;