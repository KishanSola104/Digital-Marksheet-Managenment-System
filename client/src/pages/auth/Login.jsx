import { Link, useNavigate } from "react-router-dom";

import {
  GraduationCap,
  ShieldCheck,
  FileSpreadsheet,
  Users,
  BookOpen,
  ArrowLeft,
} from "lucide-react";

import LoginForm from "../../components/auth/LoginForm";
import useSchoolAuth from "../../hooks/useSchoolAuth";

function Login() {
  const { school, logoutSchool } = useSchoolAuth();

  const navigate = useNavigate();

  /* School Logout function */
  const handleChangeSchool = () => {
    const confirmLogout = window.confirm(
      "Are you sure you want to change the school? This will log out the current school session.",
    );

    if (!confirmLogout) return;

    logoutSchool();

    navigate("/", {
      replace: true,
    });
  };

  const features = [
    {
      icon: <Users size={18} />,
      title: "Student Management",
    },
    {
      icon: <FileSpreadsheet size={18} />,
      title: "Digital Marksheets",
    },
    {
      icon: <BookOpen size={18} />,
      title: "Examination Management",
    },
    {
      icon: <ShieldCheck size={18} />,
      title: "Secure Role-Based Access",
    },
  ];

  return (
    <div className="min-h-screen flex bg-white">
      {/* ================= LEFT SIDE ================= */}

      <div className="hidden lg:flex lg:w-1/2 bg-slate-900 text-white relative overflow-hidden">
        {/* Background Blur */}

        <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl"></div>

        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl"></div>

        <div className="relative z-10 flex flex-col justify-between h-full w-full p-12">
          {/* Logo */}

          <div>
            <Link to="/" className="inline-flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-700">
                <GraduationCap size={24} />
              </div>

              <div>
                <h2 className="text-xl font-bold">DMMS</h2>

                <p className="text-sm text-blue-300">
                  Digital Marksheet Management System
                </p>
              </div>
            </Link>
          </div>

          {/* Hero */}

          <div>
            <h1 className="text-5xl font-bold leading-tight">
              Secure School
              <br />
              Management
              <br />
              Starts Here.
            </h1>

            <p className="mt-6 max-w-md text-slate-300 leading-7">
              Manage students, teachers, examinations, attendance, report cards,
              and academic records through one centralized platform.
            </p>

            {/* Features */}

            <div className="mt-10 grid grid-cols-2 gap-4">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="flex items-center gap-3 rounded-xl bg-white/5 p-4"
                >
                  <div className="text-blue-400">{feature.icon}</div>

                  <span className="text-sm">{feature.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ================= RIGHT SIDE ================= */}

      <div className="flex flex-1 items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}

          <div className="mb-10 lg:hidden">
            <Link to="/" className="inline-flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-700 text-white">
                <GraduationCap size={22} />
              </div>

              <div>
                <h2 className="font-bold text-slate-900">DMMS</h2>

                <p className="text-xs text-slate-500">School ERP System</p>
              </div>
            </Link>
          </div>

          {/* Back */}

          <div className="mb-6 flex items-center justify-between">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-blue-700"
            >
              <ArrowLeft size={16} />
              Back to Home
            </Link>

            <button
              type="button"
              onClick={handleChangeSchool}
              className="text-sm font-medium text-red-600 hover:text-red-700 hover:underline"
            >
              Change School
            </button>
          </div>

          {/* School Name */}
          {school && (
            <div className="mb-4 rounded-lg border border-blue-200 bg-blue-50 px-4 py-3">
              <p className="text-xs font-medium uppercase tracking-wide text-blue-700">
                Current School
              </p>

              <p className="mt-1 text-sm font-semibold text-slate-900">
                {school.schoolName}
              </p>
            </div>
          )}

          {/* Login Form */}

          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-lg">
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
