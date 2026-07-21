const authorize = (...allowedRoleIds) => {
    return (req, res, next) => {
        try {
            
            if (!req.user) {
                return res.status(401).json({
                    success: false,
                    message: "Unauthorized"
                });
            }

            const userRoles = req.user.roleIds || [];

            const hasAccess = userRoles.some(roleId =>
                allowedRoleIds.includes(roleId)
            );

            if (!hasAccess) {
                return res.status(403).json({
                    success: false,
                    message: "Access Denied"
                });
            }

            next();

        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message
            });
        }
    };
};

module.exports = authorize;