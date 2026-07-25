import { useRoutes } from "react-router-dom";

import HomePage from "../pages/HomePage";
import NotFound from "../components/common/NotFound";

import schoolRoutes from "./schoolRoutes";
import adminRoutes from "./adminRoutes";
import headTeacherRoutes from "./headTeacherRoutes";
import classTeacherRoutes from "./classTeacherRoutes";
import subjectTeacherRoutes from "./subjectTeacherRoutes";

const routes = [
  {
    path: "/",
    element: <HomePage />,
  },

  schoolRoutes,

  adminRoutes,

  headTeacherRoutes,

  classTeacherRoutes,

  subjectTeacherRoutes,

  {
    path: "*",
    element: <NotFound />,
  },
];

function AppRoutes() {
  return useRoutes(routes);
}

export default AppRoutes;