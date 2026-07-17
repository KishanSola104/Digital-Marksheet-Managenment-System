import {
    House,
    SquarePen,
    BarChart3,
    Settings,
} from "lucide-react";

const subjectTeacherMenu = [
    {
        id: 1,
        title: "Home",
        icon: House,
        path: "/subject-teacher/dashboard",
    },
    {
        id: 2,
        title: "Manage Marks",
        icon: SquarePen,
        path: "/subject-teacher/manage-marks",
    },
    {
        id: 3,
        title: "Results",
        icon: BarChart3,
        path: "/subject-teacher/results",
    },
    {
        id: 4,
        title: "Settings",
        icon: Settings,
        path: "/subject-teacher/settings",
    },
];

export default subjectTeacherMenu;