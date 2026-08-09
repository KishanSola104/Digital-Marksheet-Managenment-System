import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
    BookOpen,
    Users,
    GraduationCap,
    ClipboardList,
    BriefcaseBusiness,
} from "lucide-react";

import {
    getAdminDashboardStats,
    getAdminClassStrength,
} from "../../services/api";

import { SimpleBarChart } from "../../components/charts/Charts";

import { useDashboard } from "../../context/DashboardContext";


function Dashboard() {

    const {
        selectedAcademicYear,
        academicYearLoading,
    } = useDashboard();

    const navigate = useNavigate();

    const [stats, setStats] = useState({
        classes: 0,
        teachers: 0,
        students: 0,
        officeStaffs: 0,
        exams: 0,
    });

    const [classStrength, setClassStrength] = useState([]);

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState("");


    /*
    ---------------------------------------------------
    Load Dashboard Data
    ---------------------------------------------------
    */

    useEffect(() => {

        if (!selectedAcademicYear?._id) {
            return;
        }


        const loadDashboardData = async () => {

            try {

                setLoading(true);
                setError("");


                /*
                Dashboard Statistics
                */

                const statsResponse =
                    await getAdminDashboardStats(
                        selectedAcademicYear._id
                    );


                if (statsResponse?.success) {

                    setStats(
                        statsResponse.data
                    );

                }


                /*
                Students Per Class
                */

                const classStrengthResponse =
                    await getAdminClassStrength(
                        selectedAcademicYear._id
                    );


                if (classStrengthResponse?.success) {

                    setClassStrength(
                        classStrengthResponse.data || []
                    );

                }

            } catch (error) {

                console.error(
                    "Dashboard API Error:",
                    error
                );

                setError(
                    error.response?.data?.message ||
                    "Unable to load dashboard data."
                );

            } finally {

                setLoading(false);

            }

        };


        loadDashboardData();

    }, [selectedAcademicYear?._id]);


    /*
    ---------------------------------------------------
    Loading Academic Years
    ---------------------------------------------------
    */

    if (academicYearLoading) {

        return (
            <div className="p-6 text-slate-500">
                Loading academic years...
            </div>
        );

    }


    /*
    ---------------------------------------------------
    Dashboard Cards
    ---------------------------------------------------
    */

   const cards = [
    {
        title: "Total Classes",
        value: stats.classes,
        subtitle: `${stats.classes} active`,
        icon: BookOpen,
        path: "/admin/classes",
    },
    {
        title: "Teachers",
        value: stats.teachers,
        subtitle: "School wide",
        icon: Users,
        path: "/admin/teachers",
    },
    {
        title: "Students",
        value: stats.students,
        subtitle: "Across all classes",
        icon: GraduationCap,
        path: "/admin/students",
    },
    {
        title: "Upcoming Exams",
        value: stats.exams,
        subtitle: "This academic year",
        icon: ClipboardList,
        path: "/admin/exams",
    },
    {
        title: "Office Staff",
        value: stats.officeStaffs,
        subtitle: "School wide",
        icon: BriefcaseBusiness,
        path: "/admin/office-staff",
    },
];


    return (
        <div className="space-y-6">

            {/* Page Header */}

            <div className="border-b border-slate-200 pb-5">

                <h1 className="text-3xl font-bold text-slate-900">
                    Administrator Dashboard
                </h1>

                <p className="mt-1 text-slate-500">
                    Overview of school activities and statistics.
                </p>

            </div>


            {/* Error */}

            {error && (
                <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-600">
                    {error}
                </div>
            )}


            {/* Statistics Cards */}

           <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">

    {cards.map((card) => {

        const Icon = card.icon;

        return (
            <div
                key={card.title}
                onClick={() => navigate(card.path)}
                className="
                    group
                    cursor-pointer
                    rounded-xl
                    border
                    border-slate-200
                    bg-white
                    p-5
                    shadow-sm
                    transition-all
                    duration-200
                    hover:-translate-y-0.5
                    hover:border-blue-400
                    hover:shadow-md
                "
            >

                <div className="flex items-start justify-between">

                    <div>

                        <p className="text-sm font-medium text-slate-500">
                            {card.title}
                        </p>

                        <p className="mt-2 text-3xl font-bold text-blue-700">
                            {loading ? "..." : card.value}
                        </p>

                        <p className="mt-1 text-xs text-slate-400">
                            {card.subtitle}
                        </p>

                    </div>

                    <div
                        className="
                            rounded-lg
                            bg-blue-50
                            p-3
                            transition
                            group-hover:bg-blue-100
                        "
                    >
                        <Icon
                            size={20}
                            className="text-blue-700"
                        />
                    </div>

                </div>


                {/* View Details */}

                <div
                    className="
                        mt-4
                        max-h-0
                        overflow-hidden
                        opacity-0
                        transition-all
                        duration-200
                        group-hover:max-h-8
                        group-hover:opacity-100
                    "
                >
                    <span className="text-sm font-medium text-blue-600">
                        View details →
                    </span>
                </div>

            </div>
        );
    })}

</div>


            {/* Students Per Class */}

            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">

                <div className="mb-5">

                    <h2 className="text-lg font-semibold text-slate-900">
                        Students per Class
                    </h2>

                    <p className="mt-1 text-sm text-slate-500">
                        Student strength for{" "}
                        {selectedAcademicYear?.year || ""}
                    </p>

                </div>


                {classStrength.length === 0 && !loading ? (

                    <div className="flex h-64 items-center justify-center text-sm text-slate-400">
                        No class data available for this academic year.
                    </div>

                ) : (

                    <SimpleBarChart
                        data={classStrength}
                        xKey="class"
                        barKey="students"
                        height={300}
                    />

                )}

            </div>

        </div>
    );
}

export default Dashboard;