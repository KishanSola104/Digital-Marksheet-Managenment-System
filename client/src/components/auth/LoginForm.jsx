import { useState } from "react";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";

import Button from "../ui/Button";
import { Input, FormField } from "../ui/SearchInput";

import RoleSelect from "./RoleSelect";
import ForgotPasswordForm from "./ForgotPasswordForm";

import { useNavigate } from "react-router-dom";

import { loginUser } from "../../services/authService";
import useAuth from "../../hooks/useAuth";

import { ROLE_BASE_PATHS } from "../../config/paths";

function LoginForm() {
  const [role, setRole] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const [forgotPassword, setForgotPassword] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!role) {
      setError("Please select your role.");
      return;
    }

    if (!email.trim()) {
      setError("Please enter your email.");
      return;
    }

    if (!password.trim()) {
      setError("Please enter your password.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const response = await loginUser({
        email,
        password,
      });

      if (response.token && response.user) {
        login(response.user, response.token);

        const dashboardPath = ROLE_BASE_PATHS[response.user.designation] || "/";

        navigate(dashboardPath, { replace: true });
      } else if (response.data?.token && response.data?.user) {
        login(response.data.user, response.data.token);

        const dashboardPath =
          ROLE_BASE_PATHS[response.data.user.designation] || "/";

        navigate(dashboardPath, { replace: true });
      } else {
        throw new Error("Invalid login response received from server.");
      }
    } catch (err) {
      console.error(err);
      setError(err.message || "Unable to login.");
    } finally {
      setLoading(false);
    }
  };

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
        {/* ROLE */}

        <FormField label="Role" required>
          <RoleSelect value={role} onChange={(e) => setRole(e.target.value)} />
        </FormField>

        {/* EMAIL */}

        <FormField label="Email Address" required>
          <div className="relative">
            <Mail
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-10"
            />
          </div>
        </FormField>

        {/* PASSWORD */}

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
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </FormField>

        {/* Forgot password */}

        <div className="text-right">
          <button
            type="button"
            onClick={() => setForgotPassword(true)}
            className="text-sm font-medium text-blue-600 hover:underline"
          >
            Forgot Password?
          </button>
        </div>

        <Button type="submit" className="w-full" loading={loading}>
          {loading ? "Signing In..." : "Sign In"}
        </Button>
      </form>
    </div>
  );
}

export default LoginForm;
