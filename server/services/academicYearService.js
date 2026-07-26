const AcademicYear = require('../models/academicYearModel');

const academicYearService = {
    //Create Academic Year
    createAcademicYear: async (yeardata) => {
        try{
            const year = await AcademicYear.create(yeardata);
            return{
                success:true,
                message:"Academic Year Created Successully",
                data:year
            };
        }catch(error){
            throw new Error(`Error While Creating Year: ${error.message}`);
        }
    },

    //Get All Academic Year
    getAllYear: async () => {
        try{
            const year = await AcademicYear.find();
            return{
                success:true,
                message:"All Academic Year Fetched Successfully",
                data:year
            };
        }catch(error){
            throw new Error(`Error While Fetching Academic Year: ${error.message}`);
        }
    }
};

module.exports = academicYearService;