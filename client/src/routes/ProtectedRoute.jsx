import { Navigate, Outlet } from "react-router-dom";

import useAuth from "../hooks/useAuth";

function ProtectedRoute({ allowedRoles = [] }) {
    const {
        user,
        loading,
        isAuthenticated,
    } = useAuth();

    /*
    -----------------------------------------
    Wait Until Session Is Restored
    -----------------------------------------
    */

    if (loading) {
        return (
            <div className="flex h-screen items-center justify-center">
                <div className="h-10 w-10 animate-spin rounded-full border-4 border-blue-600 border-t-transparent"></div>
            </div>
        );
    }

    /*
    -----------------------------------------
    Not Logged In
    -----------------------------------------
    */

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    /*
    -----------------------------------------
    Unauthorized Role
    -----------------------------------------
    */

    if (
        allowedRoles.length > 0 &&
        !allowedRoles.includes(user?.role)
    ) {
        return <Navigate to="/" replace />;
    }

    /*
    -----------------------------------------
    Authorized
    -----------------------------------------
    */

    return <Outlet />;
}

export default ProtectedRoute;