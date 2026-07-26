import { useState } from "react";
import FormInput from "../../ui/FormInput";

function AdminDetailsStep({
  data,
  updateData,
  nextStep,
  previousStep,
}) {
  const [errors, setErrors] = useState({});

  /*
  -----------------------------------------
  Handle Change
  -----------------------------------------
  */

  const handleChange = (e) => {
    const { name, value } = e.target;

    updateData({
      [name]: value,
    });

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  /*
  -----------------------------------------
  Validate
  -----------------------------------------
  */

  const validate = () => {
    const validationErrors = {};

    if (!data.firstName?.trim()) {
      validationErrors.firstName = "First name is required.";
    }

    if (!data.lastName?.trim()) {
      validationErrors.lastName = "Last name is required.";
    }

    if (!data.gender?.trim()) {
      validationErrors.gender = "Gender is required.";
    }

    if (!data.dateOfBirth) {
      validationErrors.dateOfBirth = "Date of birth is required.";
    }

    if (!data.mobileNumber?.trim()) {
      validationErrors.mobileNumber = "Mobile number is required.";
    }

    if (!data.employeeEmail?.trim()) {
      validationErrors.employeeEmail = "Employee email is required.";
    }

    setErrors(validationErrors);

    return Object.keys(validationErrors).length === 0;
  };

  /*
  -----------------------------------------
  Next
  -----------------------------------------
  */

  const handleNext = (e) => {
    e.preventDefault();

    if (validate()) {
      nextStep();
    }
  };

  return (
    <form
      onSubmit={handleNext}
      className="space-y-6"
    >
      {/* Heading */}

      <div>

        <h2 className="text-xl font-semibold text-slate-900">
          Administrator Information
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Enter the details of the primary administrator who will manage your
          school's ERP system.
        </p>

      </div>

      {/* Form */}

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

        <FormInput
          label="First Name"
          name="firstName"
          value={data.firstName}
          onChange={handleChange}
          error={errors.firstName}
          placeholder="John"
          required
        />

        <FormInput
          label="Last Name"
          name="lastName"
          value={data.lastName}
          onChange={handleChange}
          error={errors.lastName}
          placeholder="Doe"
          required
        />

        {/* Gender */}

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Gender <span className="text-red-500">*</span>
          </label>

          <select
            name="gender"
            value={data.gender}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-300 px-3 py-2.5 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>

          {errors.gender && (
            <p className="mt-1 text-sm text-red-500">
              {errors.gender}
            </p>
          )}
        </div>

        <FormInput
          label="Date of Birth"
          name="dateOfBirth"
          type="date"
          value={data.dateOfBirth}
          onChange={handleChange}
          error={errors.dateOfBirth}
          required
        />

        <FormInput
          label="Mobile Number"
          name="mobileNumber"
          type="tel"
          value={data.mobileNumber}
          onChange={handleChange}
          error={errors.mobileNumber}
          placeholder="+91 9876543210"
          required
        />

        <FormInput
          label="Alternate Mobile Number"
          name="alternateMobileNumber"
          type="tel"
          value={data.alternateMobileNumber}
          onChange={handleChange}
          placeholder="+91 9876543211"
        />

        <div className="md:col-span-2">
          <FormInput
            label="Employee Email"
            name="employeeEmail"
            type="email"
            value={data.employeeEmail}
            onChange={handleChange}
            error={errors.employeeEmail}
            placeholder="admin@school.com"
            required
          />
        </div>

      </div>

      {/* Information */}

      <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">

        <h3 className="text-sm font-semibold text-blue-900">
          After Registration
        </h3>

        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-blue-800">
          <li>Your School ID will be generated automatically.</li>
          <li>An Administrator Employee ID will be created.</li>
          <li>Secure login credentials will be generated.</li>
          <li>Credentials will be sent to both the School Email and Employee Email.</li>
        </ul>

      </div>

      {/* Buttons */}

      <div className="flex items-center justify-between pt-2">

        <button
          type="button"
          onClick={previousStep}
          className="rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
        >
          Previous
        </button>

        <button
          type="submit"
          className="rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700"
        >
          Next
        </button>

      </div>

    </form>
  );
}

export default AdminDetailsStep;