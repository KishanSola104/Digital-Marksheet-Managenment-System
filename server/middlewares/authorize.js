const authorize = (...allowedRoleIds) => {
    return (req, res, next) => {
        try {
            
            if (!req.user) {
                return res.status(401).json({
                    success: false,
                    message: "Unauthorized"
                });
            }
            // console.log(req,user)
            // console.log(req.user.roleIds);
            // console.log(allowedRoleIds);

            const userRoles = req.user.roleIds;

            let hasAccess = false;
            allowedRoleIds.forEach( val => {
                if(val === userRoles){
                    hasAccess = true;
                }
            });

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