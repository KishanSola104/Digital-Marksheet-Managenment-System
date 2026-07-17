import {
    LayoutDashboard,
    Users,
    GraduationCap,
    BookOpen,
    Library,
    CalendarDays,
    ClipboardList,
    Building2,
    Info,
    Database,
    FileText,
    Settings,
} from "lucide-react";

const adminMenu = [
    {
        id: 1,
        title: "Dashboard",
        icon: LayoutDashboard,
        path: "/admin/dashboard",
    },

    {
        id: 2,
        title: "Manage Teachers",
        icon: Users,
        path: "/admin/teachers",
    },

    {
        id: 3,
        title: "Manage Classes",
        icon: GraduationCap,
        path: "/admin/classes",
    },

    {
        id: 4,
        title: "Manage Sections",
        icon: Library,
        path: "/admin/sections",
    },

    {
        id: 5,
        title: "Manage Subjects",
        icon: BookOpen,
        path: "/admin/subjects",
    },

    {
        id: 6,
        title: "Manage Students",
        icon: GraduationCap,
        path: "/admin/students",
    },

    {
        id: 7,
        title: "Academic Year",
        icon: CalendarDays,
        path: "/admin/academic-year",
    },

    {
        id: 8,
        title: "Manage Exams",
        icon: ClipboardList,
        path: "/admin/exams",
    },

    {
        id: 9,
        title: "Office Staff",
        icon: Building2,
        path: "/admin/staff",
    },

    {
        id: 10,
        title: "School Information",
        icon: Info,
        path: "/admin/school-information",
    },

    {
        id: 11,
        title: "Backup & Restore",
        icon: Database,
        path: "/admin/backup",
    },

    {
        id: 12,
        title: "Audit Log",
        icon: FileText,
        path: "/admin/audit-log",
    },

    {
        id: 13,
        title: "Settings",
        icon: Settings,
        path: "/admin/settings",
    },
];

export default adminMenu;