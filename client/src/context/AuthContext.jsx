import { createContext, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import { ROLE_BASE_PATHS } from "../config/paths";

export const AuthContext = createContext(null);

function AuthProvider({ children }) {
    const navigate = useNavigate();

    /*
    -----------------------------------------
    State
    -----------------------------------------
    */

    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [loading, setLoading] = useState(true);

    /*
    -----------------------------------------
    Restore Session
    -----------------------------------------
    */

    useEffect(() => {
        try {
            const storedUser = localStorage.getItem("user");
            const storedToken = localStorage.getItem("token");

            if (storedUser && storedToken) {
                setUser(JSON.parse(storedUser));
                setToken(storedToken);
            }
        } catch (error) {
            console.error("Failed to restore session:", error);

            localStorage.removeItem("user");
            localStorage.removeItem("token");
        } finally {
            setLoading(false);
        }
    }, []);

    /*
    -----------------------------------------
    Base Path
    -----------------------------------------
    */

    const basePath = useMemo(() => {
        if (!user) return "";

        return ROLE_BASE_PATHS[user.designation] || "";
    }, [user]);

    /*
    -----------------------------------------
    Login
    -----------------------------------------
    */

    function login(userData, jwtToken) {
        localStorage.setItem("user", JSON.stringify(userData));
        localStorage.setItem("token", jwtToken);

        setUser(userData);
        setToken(jwtToken);
    }

    /*
    -----------------------------------------
    Logout
    -----------------------------------------
    */

    function logout() {
        localStorage.removeItem("user");
        localStorage.removeItem("token");

        setUser(null);
        setToken(null);

        navigate("/login", { replace: true });
    }

    /*
    -----------------------------------------
    Update User
    -----------------------------------------
    */

    function updateUser(updatedUser) {
        localStorage.setItem("user", JSON.stringify(updatedUser));

        setUser(updatedUser);
    }

    /*
    -----------------------------------------
    Context Values
    -----------------------------------------
    */

    const value = {
        user,
        token,
        loading,

        basePath,

        login,
        logout,
        updateUser,

        isAuthenticated: !!user && !!token,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;