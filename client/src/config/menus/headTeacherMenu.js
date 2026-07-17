import {
    House,
    Users,
    BookOpen,
    Layers3,
    Tag,
    GraduationCap,
    ClipboardList,
    BarChart3,
    Settings,
} from "lucide-react";

const headTeacherMenu = [
    {
        id: 1,
        title: "Home",
        icon: House,
        path: "/head-teacher/dashboard",
    },
    {
        id: 2,
        title: "Teachers",
        icon: Users,
        path: "/head-teacher/teachers",
    },
    {
        id: 3,
        title: "Classes",
        icon: BookOpen,
        path: "/head-teacher/classes",
    },
    {
        id: 4,
        title: "Sections",
        icon: Layers3,
        path: "/head-teacher/sections",
    },
    {
        id: 5,
        title: "Subjects",
        icon: Tag,
        path: "/head-teacher/subjects",
    },
    {
        id: 6,
        title: "Students",
        icon: GraduationCap,
        path: "/head-teacher/students",
    },
    {
        id: 7,
        title: "Exams",
        icon: ClipboardList,
        path: "/head-teacher/exams",
    },
    {
        id: 8,
        title: "Results",
        icon: BarChart3,
        path: "/head-teacher/results",
    },
    {
        id: 9,
        title: "Settings",
        icon: Settings,
        path: "/head-teacher/settings",
    },
];

export default headTeacherMenu;