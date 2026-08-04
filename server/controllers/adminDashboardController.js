const adminDashboardService = require('../services/adminDashboardService');

//GetStats
const getDashboardStats = async (req,res) => {
    try{
        const stats = await adminDashboardService.getDashboardStats(req.params.academicYearId);
        res.status(200).json(stats);
    }catch(error){
        res.status(500).json({
            success:false,
            message:error.message
        });
    }
};

module.exports = {getDashboardStats};