import DashboardLayout from "../layouts/DashboardLayout";

import ProtectedRoute from "./ProtectedRoute";

import { ROLES } from "../config/roles";

import Dashboard from "../pages/headTeacher/Dashboard";
import Teachers from "../pages/headTeacher/Teachers";
import Classes from "../pages/headTeacher/Classes";
import Sections from "../pages/headTeacher/Sections";
import Subjects from "../pages/headTeacher/Subjects";
import Students from "../pages/headTeacher/Students";
import Exams from "../pages/headTeacher/Exams";
import Results from "../pages/headTeacher/Results";
import Settings from "../pages/headTeacher/Settings";

const headTeacherRoutes = {
  element: (
    <ProtectedRoute allowedRoles={[ROLES.HEAD_TEACHER]} />
  ),
  children: [
    {
      path: "/head-teacher",
      element: <DashboardLayout />,
      children: [
        {
          index: true,
          element: <Dashboard />,
        },
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
          path: "exams",
          element: <Exams />,
        },
        {
          path: "results",
          element: <Results />,
        },
        {
          path: "settings",
          element: <Settings />,
        },
      ],
    },
  ],
};

export default headTeacherRoutes;