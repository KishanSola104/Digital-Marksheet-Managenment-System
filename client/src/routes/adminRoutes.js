import Dashboard from "../pages/admin/Dashboard";
import Teachers from "../pages/admin/Teachers";
import Classes from "../pages/admin/Classes";
import Sections from "../pages/admin/Sections";
import Subjects from "../pages/admin/Subjects";
import Students from "../pages/admin/Students";
import AcademicYear from "../pages/admin/AcademicYear";
import Exams from "../pages/admin/Exams";
import OfficeStaff from "../pages/admin/OfficeStaff";
import SchoolInformation from "../pages/admin/SchoolInformation";
import BackupRestore from "../pages/admin/BackupRestore";
import AuditLog from "../pages/admin/AuditLog";
import Settings from "../pages/admin/Settings";

const adminRoutes = [
    {
        path: "dashboard",
        element: <Dashboard />,
    },
    {
        path: "teachers",
        element: <Teachers />,
    },
    {
        path: "classes",
        element: <Classes />,
    },
    {
        path: "sections",
        element: <Sections />,
    },
    {
        path: "subjects",
        element: <Subjects />,
    },
    {
        path: "students",
        element: <Students />,
    },
    {
        path: "academic-year",
        element: <AcademicYear />,
    },
    {
        path: "exams",
        element: <Exams />,
    },
    {
        path: "staff",
        element: <OfficeStaff />,
    },
    {
        path: "school-information",
        element: <SchoolInformation />,
    },
    {
        path: "backup",
        element: <BackupRestore />,
    },
    {
        path: "audit-log",
        element: <AuditLog />,
    },
    {
        path: "settings",
        element: <Settings />,
    },
];

export default adminRoutes;