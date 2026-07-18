import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function PublicRoute() {
    const {
        loading,
        isAuthenticated,
        basePath,
    } = useAuth();

    /*
    -----------------------------------------
    Wait Until Session Restores
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
    Already Logged In
    -----------------------------------------
    */

    if (isAuthenticated) {
        return <Navigate to={`${basePath}/dashboard`} replace />;
    }

    return <Outlet />;
}

export default PublicRoute;