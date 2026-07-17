import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import Login from "../pages/auth/Login";
import NotFound from "../components/common/NotFound";

function AppRoutes() {
    return (
        <Routes>

            {/* Public Routes */}

            <Route
                path="/"
                element={<HomePage />}
            />

            <Route
                path="/login"
                element={<Login />}
            />

            {/* Protected Dashboard Routes */}
            {/* We'll add them after creating dashboard pages */}

            {/* 404 */}

            <Route
                path="*"
                element={<NotFound />}
            />

        </Routes>
    );
}

export default AppRoutes;