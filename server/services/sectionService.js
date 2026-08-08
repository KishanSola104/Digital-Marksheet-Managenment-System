const { createSection } = require('../controllers/sectionController');
const Section = require('../models/sectionModel');

const sectionService = {
    //Create Section
    createSection: async (sectiondata) => {
        try{
            const section = await Section.create(sectiondata);
            return{
                success:true,
                message:"Section Created Successfully",
                data:section
            };
        }catch(error){
            throw new Error(`Error while creating Section ${error.message}`);
        }
    }
};

module.exports = sectionService;
