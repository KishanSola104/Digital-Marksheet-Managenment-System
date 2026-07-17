import { Link } from "react-router-dom";
import { AlertTriangle, ArrowLeft, Home } from "lucide-react";

import Button from "../ui/Button";

function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-6">

      <div className="w-full max-w-xl text-center">

        {/* Icon */}

        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-blue-100">

          <AlertTriangle
            size={42}
            className="text-blue-700"
          />

        </div>

        {/* Error Code */}

        <h1 className="mt-8 text-7xl font-extrabold text-slate-900">
          404
        </h1>

        {/* Heading */}

        <h2 className="mt-4 text-3xl font-bold text-slate-900">
          Page Not Found
        </h2>

        {/* Description */}

        <p className="mx-auto mt-4 max-w-md text-slate-500 leading-7">
          The page you're looking for doesn't exist or may have
          been moved. Please return to the Home page or Login page.
        </p>

        {/* Buttons */}

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

          <Link to="/">
            <Button className="flex items-center gap-2">

              <Home size={18} />

              Home

            </Button>
          </Link>

          <Link to="/login">
            <Button
              variant="outline"
              className="flex items-center gap-2"
            >

              <ArrowLeft size={18} />

              Back to Login

            </Button>
          </Link>

        </div>

      </div>

    </div>
  );
}

export default NotFound;