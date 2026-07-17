const userService = require('../services/userService');

const login = async (req, res) => {
    try {
        const data = await userService.login(req.body);
        res.status(200).json({
            data: data
        })
    }
    catch (error) {
        res.status(500).json({
            message: error.message
        });
    }

}

module.exports = { login }