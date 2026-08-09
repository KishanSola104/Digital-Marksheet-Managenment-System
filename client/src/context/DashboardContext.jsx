import { createContext, useContext } from "react";

const DashboardContext = createContext(null);

export const DashboardProvider = ({
    children,
    value,
}) => {

    return (
        <DashboardContext.Provider value={value}>
            {children}
        </DashboardContext.Provider>
    );
};

export const useDashboard = () => {

    const context = useContext(DashboardContext);

    if (!context) {
        throw new Error(
            "useDashboard must be used inside DashboardProvider"
        );
    }

    return context;
};