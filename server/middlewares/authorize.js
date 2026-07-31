const authorize = (...allowedRoleIds) => {
    return (req, res, next) => {
        try {
            
            if (!req.user) {
                return res.status(401).json({
                    success: false,
                    message: "Unauthorized"
                });
            }
            // console.log(req.user)
            // console.log(req.user.roleIds);
            // console.log(allowedRoleIds);

            const userRoles = [req.user.roleIds];

            let hasAccess = false;
            for(i=0;i<userRoles.length;i++){
                for(j=0;j<allowedRoleIds.length;j++){
                    if(userRoles[i] === allowedRoleIds[j]){
                        hasAccess = true;
                    }
                }
            }
            // console.log(hasAccess)
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