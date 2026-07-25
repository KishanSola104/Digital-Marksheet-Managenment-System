import { useMemo, useState } from "react";

import DashboardShell from "./DashboardShell";

import adminMenu from "../config/menus/adminMenu";
import headTeacherMenu from "../config/menus/headTeacherMenu";
import classTeacherMenu from "../config/menus/classTeacherMenu";
import subjectTeacherMenu from "../config/menus/subjectTeacherMenu";

import useAuth from "../hooks/useAuth";

function DashboardLayout() {
    /*
    ---------------------------------------------------
    Authentication
    ---------------------------------------------------
    */

    const { user } = useAuth();

    /*
    ---------------------------------------------------
    Sidebar
    ---------------------------------------------------
    */

    // Desktop collapse
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

    // Mobile drawer
    const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

    /*
    ---------------------------------------------------
    Academic Year
    ---------------------------------------------------
    */

    const academicYears = [
        "2024-25",
        "2025-26",
        "2026-27",
    ];

    const [academicYear, setAcademicYear] = useState(
        academicYears[1]
    );

    /*
    ---------------------------------------------------
    Sidebar Menu
    ---------------------------------------------------
    */

    const menu = useMemo(() => {

        switch (user?.role) {

            case "ADMIN":
                return adminMenu;

            case "HEAD_TEACHER":
                return headTeacherMenu;

            case "CLASS_TEACHER":
                return classTeacherMenu;

            case "SUBJECT_TEACHER":
                return subjectTeacherMenu;

            default:
                return [];

        }

    }, [user?.role]);

    return (
        <DashboardShell
            menu={menu}

            isSidebarCollapsed={isSidebarCollapsed}
            setIsSidebarCollapsed={setIsSidebarCollapsed}

            isMobileSidebarOpen={isMobileSidebarOpen}
            setIsMobileSidebarOpen={setIsMobileSidebarOpen}

            academicYear={academicYear}
            academicYears={academicYears}
            onAcademicYearChange={(e) =>
                setAcademicYear(e.target.value)
            }
        />
    );
}

export default DashboardLayout;