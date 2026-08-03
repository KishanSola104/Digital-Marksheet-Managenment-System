const authorize = (...roles) => {
    return (req, res, next) => {
        if (!req.user) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized",
            });
        }

        if (!roles.includes(req.user.roleId)) {
            return res.status(403).json({
                success: false,
                message: "Forbidden",
            });
        }

        next();
    };
};

module.exports = authorize;