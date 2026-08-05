const Class = require('../models/classModel');
const Student = require('../models/studentModel');
const Exam = require('../models/examModel');
const User = require('../models/userModel');
const Role = require('../models/roleModel');

const teachingCodes = ["HEAD_TEACHER", "CLASS_TEACHER", "SUBJECT_TEACHER"];
const officeStaffCodes = ["OFFICE_STAFF"];

const adminDashboardService = {
    getDashboardStats: async (academicYearId) => {
        try {
            const teachingRoleIds = await Role.find(
                { roleCode: { $in: teachingCodes }, isActive: true },
                { _id: 1 }
            ).distinct('_id');

            const officeStaffRoleIds = await Role.find(
                { roleCode: { $in: officeStaffCodes }, isActive: true },
                { _id: 1 }
            ).distinct('_id');

            // Filtered by academicYearId now
            const classes = await Class.countDocuments({ status: "Active" });
            const exams = await Exam.countDocuments({ academicYearId, status: "Active" });
            const students = await Student.countDocuments({ academicYearId, status: "Active" });
            const teachers = await User.countDocuments({ roleIds: { $in: teachingRoleIds } });
            const officeStaffs = await User.countDocuments({ roleIds: { $in: officeStaffRoleIds } });

            return {
                success: true,
                message: "Stats Fetch Successfully",
                data: { classes, teachers, students, officeStaffs, exams }
            };
        } catch (error) {
            throw new Error(`Error While Fetching Stats ${error.message}`);
        }
    }
};

module.exports = adminDashboardService;