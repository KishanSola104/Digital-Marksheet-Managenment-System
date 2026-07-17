import { useState } from "react";

import Button from "../ui/Button";
import { Input, FormField } from "../ui/SearchInput";

function ForgotPasswordForm({
  onBack,
  onSubmit,
}) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setError("Please enter your email address.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      // Later replace this with your backend API
      // await onSubmit(email);

      await new Promise((resolve) => setTimeout(resolve, 1200));

      setSuccess(true);

      if (onSubmit) {
        onSubmit(email);
      }

    } catch (err) {
      setError("Unable to send reset link.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="text-center">

        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">

          <svg
            className="h-8 w-8 text-blue-700"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M5 13l4 4L19 7" />
          </svg>

        </div>

        <h2 className="mt-6 text-2xl font-bold text-slate-900">
          Check Your Email
        </h2>

        <p className="mt-3 text-sm leading-6 text-slate-500">
          We've sent a password reset link to
        </p>

        <p className="mt-1 font-medium text-blue-700">
          {email}
        </p>

        <Button
          variant="outline"
          className="mt-8 w-full"
          onClick={onBack}
        >
          Back to Login
        </Button>

      </div>
    );
  }

  return (
    <div>

      <button
        onClick={onBack}
        className="mb-6 flex items-center gap-2 text-sm font-medium text-blue-700 hover:text-blue-800"
      >
        ← Back to Login
      </button>

      <h2 className="text-3xl font-bold text-slate-900">
        Forgot Password?
      </h2>

      <p className="mt-2 text-sm leading-6 text-slate-500">
        Enter your registered email address and we'll send
        you a password reset link.
      </p>

      {error && (
        <div className="mt-5 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-600">
          {error}
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="mt-8 space-y-5"
      >

        <FormField
          label="Email Address"
          required
        >
          <Input
            type="email"
            placeholder="Enter your registered email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormField>

        <Button
          type="submit"
          className="w-full"
          loading={loading}
        >
          Send Reset Link
        </Button>

      </form>

    </div>
  );
}

export default ForgotPasswordForm;