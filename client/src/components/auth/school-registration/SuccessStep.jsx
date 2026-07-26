import { CheckCircle2, Mail } from "lucide-react";
import { Link } from "react-router-dom";

function SuccessStep({ email }) {
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
          <span className="font-semibold">
            {" "}Digital Marksheet Management System (DMMS)
          </span>.
        </p>

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
                Your School ID, Administrator User ID, and their temporary
                passwords have been securely sent to the registered email
                address below.
              </p>

              <p className="mt-3 font-semibold text-blue-900">
                {email}
              </p>

              <p className="mt-3 text-sm text-blue-700">
                Please check your Inbox. If you don't find the email, kindly
                check your Spam or Junk folder as well.
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

            <li>Open the email containing your login credentials.</li>

            <li>Use the provided School ID and password to log in.</li>

            <li>Use the Administrator User ID and password to access the ERP.</li>

            <li>Change the temporary passwords after your first login.</li>

            <li>Complete your school profile and begin adding classes, teachers, students, and subjects.</li>

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