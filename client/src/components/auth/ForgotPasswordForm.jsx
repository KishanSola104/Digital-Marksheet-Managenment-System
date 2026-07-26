import { useState } from "react";

import Button from "../ui/Button";
import { Input, FormField } from "../ui/SearchInput";

import { forgotPassword } from "../../services/authService";

function ForgotPasswordForm({
  title = "Forgot Password?",
  description = "Enter your Employee ID. A new temporary password will be sent to your registered email address.",
  onBack,
  onSubmit,
}) {
  const [userId, setEmployeeId] = useState("");

  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState(false);

  const [error, setError] = useState("");

  /*
  ---------------------------------------------------
  Forgot Password
  ---------------------------------------------------
  */

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userId.trim()) {
      setError("Please enter your Employee ID.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const response = await forgotPassword({
        userId: userId.trim().toUpperCase(),
      });

      if (!response.success) {
        throw new Error(
          response.message ||
            "Unable to process your request."
        );
      }

      setSuccess(true);

      if (onSubmit) {
        onSubmit(userId.trim().toUpperCase());
      }

    } catch (err) {
      console.error(err);

      setError(
        err.message ||
          "Unable to send a temporary password."
      );
    } finally {
      setLoading(false);
    }
  };

  /*
  ---------------------------------------------------
  Success Screen
  ---------------------------------------------------
  */

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
          Temporary Password Sent
        </h2>

        <p className="mt-3 text-sm leading-6 text-slate-500">
          A new temporary password has been sent to the registered email address
          associated with Employee ID
        </p>

        <p className="mt-2 font-semibold text-blue-700">
          {userId}
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

  /*
  ---------------------------------------------------
  Form
  ---------------------------------------------------
  */

  return (
    <div>

      <button
        type="button"
        onClick={onBack}
        className="mb-6 flex items-center gap-2 text-sm font-medium text-blue-700 hover:text-blue-800"
      >
        ← Back to Login
      </button>

      <h2 className="text-3xl font-bold text-slate-900">
        {title}
      </h2>

      <p className="mt-2 text-sm leading-6 text-slate-500">
        {description}
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
          label="Employee ID"
          required
        >
          <Input
            type="text"
            placeholder="Enter your Employee ID"
            value={userId}
            onChange={(e) =>
              setEmployeeId(e.target.value.toUpperCase())
            }
            autoComplete="username"
          />
        </FormField>

        <Button
          type="submit"
          className="w-full"
          loading={loading}
          disabled={loading}
        >
          {loading
            ? "Sending..."
            : "Send Temporary Password"}
        </Button>

      </form>

    </div>
  );
}

export default ForgotPasswordForm;