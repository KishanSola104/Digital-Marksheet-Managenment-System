import { useState } from "react";
import { Eye, EyeOff, Lock, School } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

import Button from "../ui/Button";
import { Input, FormField } from "../ui/SearchInput";
import ForgotPasswordForm from "./ForgotPasswordForm";

import { schoolLogin } from "../../services/authService";
import useSchoolAuth from "../../hooks/useSchoolAuth";

function SchoolLoginForm() {
  const navigate = useNavigate();

  const { loginSchool } = useSchoolAuth();

  const [schoolId, setSchoolId] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const [forgotPassword, setForgotPassword] = useState(false);

  /*
  ---------------------------------------------------
  School Login
  ---------------------------------------------------
  */

  const handleSchoolLogin = async (e) => {
    e.preventDefault();

    if (!schoolId.trim()) {
      setError("Please enter your School ID.");
      return;
    }

    if (!password.trim()) {
      setError("Please enter your Password.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const response = await schoolLogin({
        schoolId: schoolId.trim().toUpperCase(),
        password,
      });

      if (response.success) {
        /*
        -----------------------------------------
        Save School Session
        -----------------------------------------
        */

        loginSchool(response.school, response.token);

        /*
        -----------------------------------------
        Redirect to Employee Login
        -----------------------------------------
        */

        navigate("/login", { replace: true });
      }
    } catch (err) {
      console.error(err);

      setError(
        err?.message ||
          "Invalid School ID or Password."
      );
    } finally {
      setLoading(false);
    }
  };

  /*
  ---------------------------------------------------
  Forgot Password
  ---------------------------------------------------
  */

  if (forgotPassword) {
    return (
      <ForgotPasswordForm
        title="Forgot School Password?"
        description="Enter your registered school email to receive password reset instructions."
        onBack={() => setForgotPassword(false)}
      />
    );
  }

  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold text-slate-900">
        Welcome Back
      </h1>

      <p className="mt-2 text-sm text-slate-500">
        Sign in to access your School ERP account.
      </p>

      {error && (
        <div className="mt-6 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-600">
          {error}
        </div>
      )}

      <form
        onSubmit={handleSchoolLogin}
        className="mt-8 space-y-5"
      >
        {/* School ID */}

        <FormField
          label="School ID"
          required
        >
          <div className="relative">
            <School
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <Input
              type="text"
              placeholder="Enter your School ID"
              value={schoolId}
              onChange={(e) =>
                setSchoolId(e.target.value.toUpperCase())
              }
              className="pl-10"
              autoComplete="username"
            />
          </div>
        </FormField>

        {/* Password */}

        <FormField
          label="Password"
          required
        >
          <div className="relative">
            <Lock
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="pl-10 pr-10"
              autoComplete="current-password"
            />

            <button
              type="button"
              onClick={() =>
                setShowPassword((prev) => !prev)
              }
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 transition-colors hover:text-slate-600"
            >
              {showPassword ? (
                <EyeOff size={18} />
              ) : (
                <Eye size={18} />
              )}
            </button>
          </div>
        </FormField>

        {/* Forgot Password */}

        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={() => setForgotPassword(true)}
            className="text-sm font-medium text-blue-600 hover:underline"
          >
            Forgot Password?
          </button>

          <Link
            to="/school/register"
            className="text-sm font-medium text-blue-600 hover:underline"
          >
            Register School
          </Link>
        </div>

        {/* Login Button */}

        <Button
          type="submit"
          className="w-full"
          loading={loading}
          disabled={loading}
        >
          {loading
            ? "Signing In..."
            : "Login to School"}
        </Button>
      </form>
    </div>
  );
}

export default SchoolLoginForm;