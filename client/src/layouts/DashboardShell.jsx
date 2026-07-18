import { Outlet } from "react-router-dom";

import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import PageContainer from "../components/layout/PageContainer";

function DashboardShell({
    menu,

    isSidebarCollapsed,
    setIsSidebarCollapsed,

    isMobileSidebarOpen,
    setIsMobileSidebarOpen,

    academicYear,
    academicYears,
    onAcademicYearChange,
}) {
    return (
        <div className="flex min-h-screen bg-slate-50">

            {/* Mobile Overlay */}

            {isMobileSidebarOpen && (
                <div
                    className="
                        fixed
                        inset-0
                        z-40
                        bg-black/50
                        lg:hidden
                    "
                    onClick={() => setIsMobileSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}

            <Sidebar
                menu={menu}
                isCollapsed={isSidebarCollapsed}
                isMobileOpen={isMobileSidebarOpen}
                closeMobileSidebar={() =>
                    setIsMobileSidebarOpen(false)
                }
            />

            {/* Main Content */}

            <div
    className={`
        flex
        min-w-0
        flex-1
        flex-col
        transition-all
        duration-300
        ${isSidebarCollapsed ? "lg:ml-20" : "lg:ml-72"}
    `}
>

                <Navbar
                    academicYear={academicYear}
                    academicYears={academicYears}
                    onAcademicYearChange={onAcademicYearChange}
                    onSidebarToggle={() => {

                        if (window.innerWidth >= 1024) {
                            setIsSidebarCollapsed((prev) => !prev);
                        } else {
                            setIsMobileSidebarOpen((prev) => !prev);
                        }

                    }}
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