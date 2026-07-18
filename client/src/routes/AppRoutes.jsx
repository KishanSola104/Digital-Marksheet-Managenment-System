import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import Login from "../pages/auth/Login";

import DashboardLayout from "../layouts/DashboardLayout";

import NotFound from "../components/common/NotFound";

import adminRoutes from "./adminRoutes";
import headTeacherRoutes from "./headTeacherRoutes";
import classTeacherRoutes from "./classTeacherRoutes";
import subjectTeacherRoutes from "./subjectTeacherRoutes";

import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";

import { ROLES } from "../config/roles";

function AppRoutes() {
  return (
    <Routes>
      {/* Home */}

      <Route path="/" element={<HomePage />} />

      {/* Public Routes */}

      <Route element={<PublicRoute />}>
        <Route path="/login" element={<Login />} />
      </Route>

      {/* Admin */}

      <Route element={<ProtectedRoute allowedRoles={[ROLES.ADMIN]} />}>
        <Route path="/admin" element={<DashboardLayout />}>
          {adminRoutes.map((route, index) => (
            <Route
              key={route.index ? "dashboard" : (route.path ?? index)}
              index={route.index}
              path={route.path}
              element={route.element}
            />
          ))}
        </Route>
      </Route>

      {/* Head Teacher */}
      <Route element={<ProtectedRoute allowedRoles={[ROLES.HEAD_TEACHER]} />}>
        <Route path="/head-teacher" element={<DashboardLayout />}>
          {headTeacherRoutes.map((route, index) => (
            <Route
              key={route.index ? "dashboard" : (route.path ?? index)}
              index={route.index}
              path={route.path}
              element={route.element}
            />
          ))}
        </Route>
      </Route>

      {/* Class Teacher Routes */}
      <Route element={<ProtectedRoute allowedRoles={[ROLES.CLASS_TEACHER]} />}>
        <Route path="/class-teacher" element={<DashboardLayout />}>
          {classTeacherRoutes.map((route, index) => (
            <Route
              key={route.index ? "dashboard" : (route.path ?? index)}
              index={route.index}
              path={route.path}
              element={route.element}
            />
          ))}
        </Route>
      </Route>

      {/* Subject Teacher Routes */}
      <Route
        element={<ProtectedRoute allowedRoles={[ROLES.SUBJECT_TEACHER]} />}
      >
        <Route path="/subject-teacher" element={<DashboardLayout />}>
          {subjectTeacherRoutes.map((route, index) => (
            <Route
              key={route.index ? "dashboard" : (route.path ?? index)}
              index={route.index}
              path={route.path}
              element={route.element}
            />
          ))}
        </Route>
      </Route>

      {/* 404 */}

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
