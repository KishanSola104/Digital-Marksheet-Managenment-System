import { useEffect, useMemo, useState } from "react";

import DashboardShell from "./DashboardShell";

import adminMenu from "../config/menus/adminMenu";
import headTeacherMenu from "../config/menus/headTeacherMenu";
import classTeacherMenu from "../config/menus/classTeacherMenu";
import subjectTeacherMenu from "../config/menus/subjectTeacherMenu";

import useAuth from "../hooks/useAuth";
import api from "../services/api";

import { DashboardProvider } from "../context/DashboardContext";

function DashboardLayout() {

    const { user } = useAuth();

    // Sidebar
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
    const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

    // Academic Year
    const [academicYears, setAcademicYears] = useState([]);
    const [selectedAcademicYear, setSelectedAcademicYear] = useState(null);
    const [academicYearLoading, setAcademicYearLoading] = useState(true);

    /*
    ---------------------------------------------------
    Load Academic Years
    ---------------------------------------------------
    */

    useEffect(() => {

        const loadAcademicYears = async () => {

            try {

                setAcademicYearLoading(true);

                const response = await api.get("/academic-years");

                console.log(
                    "Academic Year API Response:",
                    response.data
                );

                if (response.data?.success) {

                    const years = response.data.data || [];

                    console.log(
                        "Academic Years:",
                        years
                    );

                    setAcademicYears(years);

                    /*
                    Select current year if available.
                    Otherwise select first available year.
                    */

                    const defaultYear =
                        years.find(
                            (year) => year.isCurrent === true
                        ) ||
                        years[0] ||
                        null;

                    console.log(
                        "Selected Academic Year:",
                        defaultYear
                    );

                    setSelectedAcademicYear(defaultYear);
                }

            } catch (error) {

                console.error(
                    "Academic Year API Error:",
                    error
                );

            } finally {

                setAcademicYearLoading(false);

            }
        };

        loadAcademicYears();

    }, []);


    /*
    ---------------------------------------------------
    Academic Year Change
    ---------------------------------------------------
    */

    const handleAcademicYearChange = (event) => {

        const selectedId = event.target.value;

        console.log(
            "Selected Academic Year ID:",
            selectedId
        );

        const selectedYear = academicYears.find(
            (year) => year._id === selectedId
        );

        console.log(
            "Selected Academic Year Object:",
            selectedYear
        );

        setSelectedAcademicYear(
            selectedYear || null
        );
    };


    /*
    ---------------------------------------------------
    Sidebar Menu
    ---------------------------------------------------
    */

    const menu = useMemo(() => {

        switch (user?.role?.code) {

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

    }, [user?.role?.code]);


    /*
    ---------------------------------------------------
    Dashboard Context
    ---------------------------------------------------
    */

    const dashboardContextValue = {
        academicYears,
        selectedAcademicYear,
        academicYearLoading,
        handleAcademicYearChange,
    };


    return (
        <DashboardProvider value={dashboardContextValue}>

            <DashboardShell

                menu={menu}

                isSidebarCollapsed={isSidebarCollapsed}
                setIsSidebarCollapsed={setIsSidebarCollapsed}

                isMobileSidebarOpen={isMobileSidebarOpen}
                setIsMobileSidebarOpen={setIsMobileSidebarOpen}

                academicYear={
                    selectedAcademicYear?._id || ""
                }

                academicYears={academicYears}

                onAcademicYearChange={
                    handleAcademicYearChange
                }

            />

        </DashboardProvider>
    );
}

export default DashboardLayout;