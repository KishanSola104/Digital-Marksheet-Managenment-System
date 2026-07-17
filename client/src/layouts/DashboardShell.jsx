import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Footer from "./Footer";
import PageContainer from "./PageContainer";

function DashboardShell({
    user,
    menu,
    sidebarOpen,
    setSidebarOpen,
    academicYear,
    academicYears,
    onAcademicYearChange,
    onLogout,
}) {
    return (
        <div className="flex h-screen bg-slate-50">

            {/* Sidebar */}

            <Sidebar
                user={user}
                menu={menu}
                isCollapsed={!sidebarOpen}
                onLogout={onLogout}
            />

            {/* Main Content */}

            <div className="flex flex-1 flex-col overflow-hidden">

                <Navbar
                    user={user}
                    academicYear={academicYear}
                    academicYears={academicYears}
                    onAcademicYearChange={onAcademicYearChange}
                    onSidebarToggle={() =>
                        setSidebarOpen((prev) => !prev)
                    }
                    onLogout={onLogout}
                />

                <PageContainer>
                    <Outlet />
                </PageContainer>

                <Footer />

            </div>

        </div>
    );
}

export default DashboardShell;