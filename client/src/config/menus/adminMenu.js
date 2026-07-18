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
    User,
} from "lucide-react";

import { ADMIN_PATHS } from "../paths";

const adminMenu = [
    {
        id: 1,
        title: "Dashboard",
        icon: LayoutDashboard,
        path: ADMIN_PATHS.DASHBOARD,
    },
    {
        id: 2,
        title: "Manage Teachers",
        icon: Users,
        path: ADMIN_PATHS.TEACHERS,
    },
    {
        id: 3,
        title: "Manage Classes",
        icon: GraduationCap,
        path: ADMIN_PATHS.CLASSES,
    },
    {
        id: 4,
        title: "Manage Sections",
        icon: Library,
        path: ADMIN_PATHS.SECTIONS,
    },
    {
        id: 5,
        title: "Manage Subjects",
        icon: BookOpen,
        path: ADMIN_PATHS.SUBJECTS,
    },
    {
        id: 6,
        title: "Manage Students",
        icon: GraduationCap,
        path: ADMIN_PATHS.STUDENTS,
    },
    {
        id: 7,
        title: "Academic Year",
        icon: CalendarDays,
        path: ADMIN_PATHS.ACADEMIC_YEAR,
    },
    {
        id: 8,
        title: "Manage Exams",
        icon: ClipboardList,
        path: ADMIN_PATHS.EXAMS,
    },
    {
        id: 9,
        title: "Office Staff",
        icon: Building2,
        path: ADMIN_PATHS.OFFICE_STAFF,
    },
    {
        id: 10,
        title: "School Information",
        icon: Info,
        path: ADMIN_PATHS.SCHOOL_INFORMATION,
    },
    {
        id: 11,
        title: "Backup & Restore",
        icon: Database,
        path: ADMIN_PATHS.BACKUP_RESTORE,
    },
    {
        id: 12,
        title: "Audit Log",
        icon: FileText,
        path: ADMIN_PATHS.AUDIT_LOG,
    },
    {
        id: 13,
        title: "Settings",
        icon: Settings,
        path: ADMIN_PATHS.SETTINGS,
    },
    {
    id: 14,
    title: "Profile",
    icon: User,
    path: ADMIN_PATHS.PROFILE,
    },
];

export default adminMenu;