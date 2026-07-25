import { useState } from "react";
import FormInput from "../../ui/FormInput";
import FormTextarea from "../../ui/FormTextarea";

function SchoolDetailsStep({
  data,
  updateData,
  nextStep,
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

    if (!data.schoolName?.trim()) {
      validationErrors.schoolName = "School name is required.";
    }

    if (!data.officialEmail?.trim()) {
      validationErrors.officialEmail = "Official email is required.";
    }

    if (!data.contactNumber?.trim()) {
      validationErrors.contactNumber = "Contact number is required.";
    }

    if (!data.establishmentYear?.trim()) {
      validationErrors.establishmentYear =
        "Established year is required.";
    }

    if (!data.address?.trim()) {
      validationErrors.address = "School address is required.";
    }

    setErrors(validationErrors);

    return Object.keys(validationErrors).length === 0;
  };

  /*
  -----------------------------------------
  Submit
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
          School Information
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Enter your school's basic information to begin registration.
        </p>

      </div>

      {/* Form */}

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

        <FormInput
          label="School Name"
          name="schoolName"
          value={data.schoolName}
          onChange={handleChange}
          error={errors.schoolName}
          placeholder="ABC Public School"
          required
        />

        <FormInput
          label="Official Email"
          name="officialEmail"
          type="email"
          value={data.officialEmail}
          onChange={handleChange}
          error={errors.officialEmail}
          placeholder="school@example.com"
          required
        />

        <FormInput
          label="Contact Number"
          name="contactNumber"
          type="tel"
          value={data.contactNumber}
          onChange={handleChange}
          error={errors.contactNumber}
          placeholder="+91 9876543210"
          required
        />

        <FormInput
          label="Established Year"
          name="establishmentYear"
          type="text"
          value={data.establishmentYear}
          onChange={handleChange}
          error={errors.establishmentYear}
          placeholder="2005"
          required
        />

        <div className="md:col-span-2">

          <FormTextarea
            label="School Address"
            name="address"
            value={data.address}
            onChange={handleChange}
            error={errors.address}
            rows={3}
            placeholder="Enter your school's complete address"
            required
          />

        </div>

        <div className="md:col-span-2">

          <FormInput
            label="Website URL"
            name="website"
            type="url"
            value={data.website}
            onChange={handleChange}
            placeholder="https://www.yourschool.com"
          />

        </div>

      </div>

      {/* Buttons */}

      <div className="flex justify-end pt-2">

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

export default SchoolDetailsStep;