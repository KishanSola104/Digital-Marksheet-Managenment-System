import {
    House,
    BookOpen,
    ClipboardList,
    BarChart3,
    Award,
    Settings,
} from "lucide-react";

const classTeacherMenu = [
    {
        id: 1,
        title: "Home",
        icon: House,
        path: "/class-teacher/dashboard",
    },
    {
        id: 2,
        title: "Subjects & Teachers",
        icon: BookOpen,
        path: "/class-teacher/subjects",
    },
    {
        id: 3,
        title: "Exams",
        icon: ClipboardList,
        path: "/class-teacher/exams",
    },
    {
        id: 4,
        title: "Results",
        icon: BarChart3,
        path: "/class-teacher/results",
    },
    {
        id: 5,
        title: "Generate Report Card",
        icon: Award,
        path: "/class-teacher/report-card",
    },
    {
        id: 6,
        title: "Settings",
        icon: Settings,
        path: "/class-teacher/settings",
    },
];

export default classTeacherMenu;