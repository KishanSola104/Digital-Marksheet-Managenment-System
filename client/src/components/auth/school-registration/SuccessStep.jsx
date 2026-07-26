import { CheckCircle2, Mail, Building2, User } from "lucide-react";
import { Link } from "react-router-dom";

function SuccessStep({
  schoolCode,
  adminEmployeeId,
  email,
}) {
  return (
    <div className="py-6">

      <div className="mx-auto max-w-2xl rounded-xl border border-slate-200 bg-white p-8 text-center shadow-sm">

        {/* Success Icon */}

        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">

          <CheckCircle2
            size={42}
            className="text-green-600"
          />

        </div>

        {/* Heading */}

        <h2 className="mt-6 text-3xl font-bold text-slate-900">
          Registration Successful
        </h2>

        <p className="mt-3 text-slate-600">
          Your school has been successfully registered on the
          <span className="font-semibold"> Digital Marksheet Management System (DMMS)</span>.
        </p>

        {/* Generated Information */}

        <div className="mt-8 rounded-lg border border-slate-200 bg-slate-50">

          <div className="grid divide-y md:grid-cols-2 md:divide-x md:divide-y-0">

            <div className="p-6">

              <div className="flex items-center justify-center gap-2 text-blue-600">

                <Building2 size={20} />

                <span className="font-semibold">
                  School Code
                </span>

              </div>

              <p className="mt-3 text-2xl font-bold tracking-wide text-slate-900">
                {schoolCode}
              </p>

            </div>

            <div className="p-6">

              <div className="flex items-center justify-center gap-2 text-blue-600">

                <User size={20} />

                <span className="font-semibold">
                  Administrator ID
                </span>

              </div>

              <p className="mt-3 text-2xl font-bold tracking-wide text-slate-900">
                {adminEmployeeId}
              </p>

            </div>

          </div>

        </div>

        {/* Email Information */}

        <div className="mt-8 rounded-lg border border-blue-200 bg-blue-50 p-5 text-left">

          <div className="flex items-start gap-3">

            <Mail
              className="mt-0.5 text-blue-600"
              size={22}
            />

            <div>

              <h3 className="font-semibold text-blue-900">
                Login Credentials Sent
              </h3>

              <p className="mt-1 text-sm leading-6 text-blue-800">
                Your School Login credentials and Administrator Login credentials
                have been sent to:
              </p>

              <p className="mt-2 font-semibold text-blue-900">
                {email}
              </p>

            </div>

          </div>

        </div>

        {/* Next Steps */}

        <div className="mt-8 rounded-lg border border-emerald-200 bg-emerald-50 p-5 text-left">

          <h3 className="font-semibold text-emerald-900">
            Next Steps
          </h3>

          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-emerald-800">

            <li>Check your email for your login credentials.</li>

            <li>Log in using your School Code and password.</li>

            <li>Complete your school profile.</li>

            <li>Add classes, teachers, students, and subjects.</li>

          </ul>

        </div>

        {/* Login Button */}

        <Link
          to="/school/login"
          className="mt-8 inline-flex items-center justify-center rounded-lg bg-blue-600 px-8 py-3 font-medium text-white transition hover:bg-blue-700"
        >
          Go to School Login
        </Link>

      </div>

    </div>
  );
}

export default SuccessStep;