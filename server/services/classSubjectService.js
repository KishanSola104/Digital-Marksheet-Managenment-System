const { createClassSubject } = require('../controllers/classSubjectController');
const ClassSubject = require('../models/classSubjectModel');

const classSubjectService = {
    //Create Class Subject
    createClassSubject: async (data) => {
        try{
            const classSub = await ClassSubject.create(data);
            return{
                success:true,
                message:"Class Subject Created Successfully",
                data:classSub
            };
        }catch(error){
            throw new Error(`Error While Creating Class Subject: ${error.message}`);
        }
    }
};

module.exports = classSubjectService;