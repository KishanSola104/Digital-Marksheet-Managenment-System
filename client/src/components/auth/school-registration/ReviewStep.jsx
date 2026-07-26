function ReviewStep({
  school,
  admin,
  previousStep,
  submit,
  loading,
}) {
  const Row = ({ label, value }) => (
    <div className="flex items-start justify-between border-b border-slate-100 py-3">
      <span className="text-sm font-medium text-slate-600">
        {label}
      </span>

      <span className="max-w-sm text-right text-sm text-slate-900">
        {value || "-"}
      </span>
    </div>
  );

  return (
    <div className="space-y-6">

      {/* Heading */}

      <div>

        <h2 className="text-xl font-semibold text-slate-900">
          Review & Confirm
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Please review your information before creating your school's ERP account.
        </p>

      </div>

      {/* School Information */}

      <div className="rounded-lg border border-slate-200 bg-white">

        <div className="border-b border-slate-200 px-5 py-4">

          <h3 className="font-semibold text-slate-900">
            School Information
          </h3>

        </div>

        <div className="px-5">

          <Row
            label="School Name"
            value={school.schoolName}
          />

          <Row
            label="Official Email"
            value={school.email}
          />

          <Row
            label="Contact Number"
            value={school.phone}
          />

          <Row
            label="Established Year"
            value={school.establishedYear}
          />

          <Row
            label="Website"
            value={school.website}
          />

          <Row
            label="Address"
            value={school.address}
          />

        </div>

      </div>

      {/* Administrator Information */}

      <div className="rounded-lg border border-slate-200 bg-white">

        <div className="border-b border-slate-200 px-5 py-4">

          <h3 className="font-semibold text-slate-900">
            Administrator Information
          </h3>

        </div>

        <div className="px-5">

          <Row
            label="Full Name"
            value={`${admin.firstName} ${admin.lastName}`}
          />

          <Row
            label="Gender"
            value={admin.gender}
          />

          <Row
            label="Date of Birth"
            value={admin.dateOfBirth}
          />

          <Row
            label="Mobile Number"
            value={admin.mobileNumber}
          />

          <Row
            label="Alternate Mobile Number"
            value={admin.alternateMobileNumber}
          />

          <Row
            label="Employee Email"
            value={admin.employeeEmail}
          />

        </div>

      </div>

      {/* Information */}

      <div className="rounded-lg border border-green-200 bg-green-50 p-4">

        <h3 className="text-sm font-semibold text-green-800">
          What happens next?
        </h3>

        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-green-700">

          <li>School ID will be generated automatically.</li>

          <li>Administrator Employee ID will be generated.</li>

          <li>Secure login credentials will be created.</li>

          <li>
            Login credentials will be sent to both the School Email and Employee Email.
          </li>

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
          type="button"
          onClick={submit}
          disabled={loading}
          className="rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Creating Account..." : "Register School"}
        </button>

      </div>

    </div>
  );
}

export default ReviewStep;