import { useState } from "react";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";

import Button from "../ui/Button";
import { Input, FormField } from "../ui/SearchInput";

import RoleSelect from "./RoleSelect";
import ForgotPasswordForm from "./ForgotPasswordForm";

import { employeeLogin } from "../../services/authService";

import useAuth from "../../hooks/useAuth";
import useSchoolAuth from "../../hooks/useSchoolAuth";

import { ROLE_BASE_PATHS } from "../../config/paths";

import useRoles from "../../hooks/useRoles";

function LoginForm() {
  const navigate = useNavigate();

  const { login } = useAuth();

  const { roles, loading: rolesLoading } = useRoles();

  const { school, isSchoolAuthenticated } = useSchoolAuth();

  const [role, setRole] = useState("");
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const [forgotPassword, setForgotPassword] = useState(false);

  /*
  ---------------------------------------------------
  Employee Login
  ---------------------------------------------------
  */

  const handleLogin = async (e) => {
    e.preventDefault();

    /*
    -----------------------------------------
    Verify School Session
    -----------------------------------------
    */

    if (!isSchoolAuthenticated || !school) {
      navigate("/school/login", { replace: true });
      return;
    }

    /*
    -----------------------------------------
    Validation
    -----------------------------------------
    */

    if (!role) {
      setError("Please select your role.");
      return;
    }

    if (!userId.trim()) {
      setError("Please enter your User/Employee ID");
      return;
    }

    if (!password.trim()) {
      setError("Please enter your password.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const response = await employeeLogin({
        userId: userId.trim().toUpperCase(),
        password,
        role,
      });

      if (!response.success) {
        throw new Error(response.message || "Login failed.");
      }

      /*
      -----------------------------------------
      Save Employee Session
      -----------------------------------------
      */

      login(response.user, response.token);

      /*
      -----------------------------------------
      Redirect
      -----------------------------------------
      */

      const dashboardPath = ROLE_BASE_PATHS[response.user.role] || "/";

      navigate(dashboardPath, {
        replace: true,
      });
    } catch (err) {
      console.error(err);

      setError(err.message || "Unable to login.");
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
    return <ForgotPasswordForm onBack={() => setForgotPassword(false)} />;
  }

  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold text-slate-900">Welcome Back</h1>

      <p className="mt-2 text-sm text-slate-500">
        Sign in to access your dashboard.
      </p>

      {error && (
        <div className="mt-6 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-600">
          {error}
        </div>
      )}

      <form onSubmit={handleLogin} className="mt-8 space-y-5">
        {/* Role */}

        <FormField label="Role" required>
          <RoleSelect
            roles={roles}
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
        </FormField>

        {/* Email */}

        <FormField label="User / Employee ID" required>
          <div className="relative">
            <Mail
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <Input
              type="text"
              placeholder="Enter your User / Employee ID"
              value={userId}
              onChange={(e)=>setUserId(e.target.value)}
              className="pl-10"
              autoComplete="username"
            />
          </div>
        </FormField>

        {/* Password */}

        <FormField label="Password" required>
          <div className="relative">
            <Lock
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="pl-10 pr-10"
              autoComplete="current-password"
            />

            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 transition-colors hover:text-slate-600"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </FormField>

        {/* Forgot Password */}

        <div className="text-right">
          <button
            type="button"
            onClick={() => setForgotPassword(true)}
            className="text-sm font-medium text-blue-600 hover:underline"
          >
            Forgot Password?
          </button>
        </div>

        {/* Submit */}

        <Button
          type="submit"
          className="w-full"
          loading={loading}
          disabled={loading}
        >
          {loading ? "Signing In..." : "Sign In"}
        </Button>
      </form>
    </div>
  );
}

export default LoginForm;
