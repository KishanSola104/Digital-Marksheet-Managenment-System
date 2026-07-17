import { useMemo, useState } from "react";

import DashboardShell from "./DashboardShell";

import adminMenu from "../menus/adminMenu";
import headTeacherMenu from "../menus/headTeacherMenu";
import classTeacherMenu from "../menus/classTeacherMenu";
import subjectTeacherMenu from "../menus/subjectTeacherMenu";

function DashboardLayout() {

    /*
    ---------------------------------------------------
    Temporary User
    Later this will come from Context / Redux / API
    ---------------------------------------------------
    */

    const [user] = useState({
        id: 1,
        name: "Kishan Solanki",
        role: "admin",
        employeeId: "ADMIN-001",
        avatar: "",
    });

    /*
    ---------------------------------------------------
    Sidebar
    ---------------------------------------------------
    */

    const [sidebarOpen, setSidebarOpen] = useState(true);

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
    Select Sidebar Menu
    ---------------------------------------------------
    */

    const menu = useMemo(() => {

        switch (user.role) {

            case "admin":
                return adminMenu;

            case "head_teacher":
                return headTeacherMenu;

            case "class_teacher":
                return classTeacherMenu;

            case "subject_teacher":
                return subjectTeacherMenu;

            default:
                return [];
        }

    }, [user.role]);

    /*
    ---------------------------------------------------
    Logout
    ---------------------------------------------------
    */

    function handleLogout() {

        console.log("Logout");

        /*
            Later

            Remove JWT

            Clear Context

            Navigate("/login")
        */

    }

    return (

        <DashboardShell

            user={user}

            menu={menu}

            sidebarOpen={sidebarOpen}

            setSidebarOpen={setSidebarOpen}

            academicYear={academicYear}

            academicYears={academicYears}

            onAcademicYearChange={(e) =>
                setAcademicYear(e.target.value)
            }

            onLogout={handleLogout}

        />

    );

}

export default DashboardLayout;