import PublicRoute from "./PublicRoute";

import Login from "../pages/auth/Login";
import SchoolLogin from "../pages/auth/SchoolLogin";
import SchoolRegister from "../pages/auth/SchoolRegister";

const schoolRoutes = {
  element: <PublicRoute />,
  children: [
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/school/login",
      element: <SchoolLogin />,
    },
    {
      path: "/school/register",
      element: <SchoolRegister />,
    },
  ],
};

export default schoolRoutes;