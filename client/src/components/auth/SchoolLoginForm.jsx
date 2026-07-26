import { useState } from "react";
import { Eye, EyeOff, Lock, School } from "lucide-react";
import { Link } from "react-router-dom";

import Button from "../ui/Button";
import { Input, FormField } from "../ui/SearchInput";
import ForgotPasswordForm from "./ForgotPasswordForm";

function SchoolLoginForm() {
  const [schoolCode, setSchoolCode] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const [forgotPassword, setForgotPassword] = useState(false);

  const handleSchoolLogin = async (e) => {
    e.preventDefault();

    if (!schoolCode.trim()) {
      setError("Please enter your School Code.");
      return;
    }

    if (!password.trim()) {
      setError("Please enter your Password.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      /*
        TODO:
        Call School Login API

        Example:

        const response = await schoolLogin({
            schoolCode,
            password,
        });

        Store:
        schoolToken
        school

        Navigate("/login");
      */

      console.log({
        schoolCode,
        password,
      });

    } catch (err) {
      console.error(err);
      setError(err.message || "Unable to login.");
    } finally {
      setLoading(false);
    }
  };

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
        {/* School Code */}

        <FormField
          label="School Code"
          required
        >
          <div className="relative">
            <School
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <Input
              type="text"
              placeholder="Enter your School Code"
              value={schoolCode}
              onChange={(e) => setSchoolCode(e.target.value.toUpperCase())}
              className="pl-10"
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
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
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

        <div className="flex justify-between items-center">
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
        >
          {loading ? "Signing In..." : "Login to School"}
        </Button>
      </form>
    </div>
  );
}

export default SchoolLoginForm;