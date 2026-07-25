import DashboardLayout from "../layouts/DashboardLayout";

import ProtectedRoute from "./ProtectedRoute";

import { ROLES } from "../config/roles";

import Dashboard from "../pages/subjectTeacher/Dashboard";
import ManageMarks from "../pages/subjectTeacher/ManageMarks";
import Results from "../pages/subjectTeacher/Results";
import Settings from "../pages/subjectTeacher/Settings";

const subjectTeacherRoutes = {
  element: (
    <ProtectedRoute allowedRoles={[ROLES.SUBJECT_TEACHER]} />
  ),
  children: [
    {
      path: "/subject-teacher",
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
      ],
    },
  ],
};

export default subjectTeacherRoutes;