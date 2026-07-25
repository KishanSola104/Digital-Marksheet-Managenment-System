import { Link } from "react-router-dom";
import { GraduationCap, ArrowLeft } from "lucide-react";

import SchoolRegisterWizard from "../../components/auth/SchoolRegisterWizard";

function SchoolRegister() {
  return (
    <div className="min-h-screen bg-slate-50">

      {/* Header */}

      <header className="border-b border-slate-200 bg-white shadow-sm">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

          {/* Logo */}

          <Link
            to="/"
            className="flex items-center gap-3"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-700 text-white">
              <GraduationCap size={22} />
            </div>

            <div>
              <h1 className="text-lg font-bold text-slate-900">
                DMMS
              </h1>

              <p className="text-xs text-slate-500">
                Digital Marksheet Management System
              </p>
            </div>
          </Link>

          {/* Back Button */}

          <Link
            to="/school/login"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-blue-700"
          >
            <ArrowLeft size={16} />
            Back to School Login
          </Link>

        </div>
      </header>

      {/* Main Content */}

      <main className="mx-auto max-w-7xl px-6 py-10">

        <SchoolRegisterWizard />

      </main>

    </div>
  );
}

export default SchoolRegister;