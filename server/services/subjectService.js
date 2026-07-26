const Subject = require('../models/subjectModel');
const { changeStatusById } = require('./classService');

const subjectService = {
    //create Subject
    createSubject: async (data) => {
        try{
            const subject = await Subject.create(data);
            return{
                success:true,
                message:"Subject Created Successfully",
                data:subject
            };
        }catch(error){
            throw new Error(`Error While Creating Subject: ${error.message}`);
        }
    },

    //Get All Subject
    getAllSubject: async () => {
        try{
            const subject = await Subject.find();
            return{
                success:true,
                message:"All Subject Fetched Successfully",
                data:subject
            };
        }catch(error){
            throw new Error(`Error while fetching All Subject: ${error.message}`);
        }
    },

    //Get Subject By SubjectId
    getById: async (id) => {
        try{
            const subject = await Subject.findOne({subjectId:id});
            if(!subject){
                throw new Error("Subject Not Found");
            }
            return{
                success:true,
                message:"Subject fetched Successfully",
                data:subject
            };
        }catch(error){
            throw new Error(`Error While fetching Subject: ${error.message}`);
        }
    },

    //Update Subject By SubjectId
    updateById: async (id,updateData) => {
        try{
            const subject = await Subject.findOneAndUpdate(
                {subjectId:id},
                {$set:updateData},
                {returnDocument:'after'}
            );
            if(!subject){
                throw new Error("Subject Not Found");
            }
            return{
                success:true,
                message:"Subject Updated Successfully",
                data:subject
            };
        }catch(error){
            throw new Error(`Error While Updating Subject: ${error.message}`);
        }
    },


    //Delete Subject By SubjectID
    deleteById: async (id) => {
        try{
            const subject = await Subject.findOneAndDelete({subjectId:id});
            if(!subject){
                throw new Error("Subject Not Found");
            }
            return{
                success:true,
                message:"Subject Deleted Successfully"
            };
        }catch(error){
            throw new Error(`Error While Deleting Subject: ${error.message}`);
        }
    },

    //Change the Status of Subject By SubjectId(Active or Inactive)
    changeStatusById: async (id) => {
        try{
            const subject = await Subject.findOne({subjectId:id});
            if(!subject){
                throw new Error("Subject Not Found");
            }

            subject.status = subject.status === "Active" ? "Inactive" : "Active";
            await subject.save();

            return{
                success:true,
                message:"Status Change Successfully of Subject",
                data:subject
            };
        }catch(error){
        throw new Error(`Error While changing Status: ${error.message}`);
        }
    }
};

module.exports = subjectService;