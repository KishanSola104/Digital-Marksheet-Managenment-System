import Dashboard from "../pages/subjectTeacher/Dashboard";
import ManageMarks from "../pages/subjectTeacher/ManageMarks";
import Results from "../pages/subjectTeacher/Results";
import Settings from "../pages/subjectTeacher/Settings";

const subjectTeacherRoutes = [
    {
        path: "dashboard",
        element: <Dashboard />,
    },
    {
        path: "manage-marks",
        element: <ManageMarks />,
    },
    {
        path: "results",
        element: <Results />,
    },
    {
        path: "settings",
        element: <Settings />,
    },
];

export default subjectTeacherRoutes;