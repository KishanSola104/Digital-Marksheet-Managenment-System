import { useState } from "react";

import { registerSchool } from "../../services/authService";

import Stepper from "./school-registration/Stepper";
import SchoolDetailsStep from "./school-registration/SchoolDetailsStep";
import AdminDetailsStep from "./school-registration/AdminDetailsStep";
import ReviewStep from "./school-registration/ReviewStep";
import SuccessStep from "./school-registration/SuccessStep";

function SchoolRegisterWizard() {
  /*
  ---------------------------------------------------
  Current Step
  ---------------------------------------------------
  */

  const [currentStep, setCurrentStep] = useState(1);

  /*
  ---------------------------------------------------
  Loading State
  ---------------------------------------------------
  */

  const [loading, setLoading] = useState(false);

  /*
  ---------------------------------------------------
  Registration Success Information
  ---------------------------------------------------
  */

  const [schoolInfo, setSchoolInfo] = useState({
    email: "",
  });

  /*
  ---------------------------------------------------
  Registration Form Data
  ---------------------------------------------------
  */

  const [formData, setFormData] = useState({
    school: {
      schoolName: "",
      email: "",
      phone: "",
      address: "",
      website: "",
      establishedYear: "",
    },

    admin: {
      firstName: "",
      lastName: "",
      gender: "",
      dateOfBirth: "",
      mobileNumber: "",
      alternateMobileNumber: "",
      employeeEmail: "",
      designation: "ADMIN",
    },
  });

  /*
  ---------------------------------------------------
  Update School Details
  ---------------------------------------------------
  */

  const updateSchool = (data) => {
    setFormData((prev) => ({
      ...prev,
      school: {
        ...prev.school,
        ...data,
      },
    }));
  };

  /*
  ---------------------------------------------------
  Update Admin Details
  ---------------------------------------------------
  */

  const updateAdmin = (data) => {
    setFormData((prev) => ({
      ...prev,
      admin: {
        ...prev.admin,
        ...data,
      },
    }));
  };

  /*
  ---------------------------------------------------
  Navigation
  ---------------------------------------------------
  */

  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 4));
  };

  const previousStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  /*
  ---------------------------------------------------
  Submit Registration
  ---------------------------------------------------
  */

  const handleSubmit = async () => {
    try {
      setLoading(true);

      const payload = {
        ...formData.school,
        ...formData.admin,
      };

      const response = await registerSchool(payload);

      if (response.success) {
        setSchoolInfo({
          email: formData.school.email,
        });

        setCurrentStep(4);
      }
    } catch (error) {
      console.error(error);

      alert(
        error.message ||
        "Something went wrong while registering the school."
      );
    } finally {
      setLoading(false);
    }
  };
    /*
  ---------------------------------------------------
  Render Current Step
  ---------------------------------------------------
  */

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <SchoolDetailsStep
            data={formData.school}
            updateData={updateSchool}
            nextStep={nextStep}
          />
        );

      case 2:
        return (
          <AdminDetailsStep
            data={formData.admin}
            updateData={updateAdmin}
            nextStep={nextStep}
            previousStep={previousStep}
          />
        );

      case 3:
        return (
          <ReviewStep
            school={formData.school}
            admin={formData.admin}
            previousStep={previousStep}
            submit={handleSubmit}
            loading={loading}
          />
        );

      case 4:
        return (
          <SuccessStep
            email={schoolInfo.email}
          />
        );

      default:
        return null;
    }
  };

  return (
    <div className="mx-auto w-full max-w-4xl">

      {/* Heading */}

      {currentStep !== 4 && (
        <div className="mb-8 text-center">

          <h1 className="text-3xl font-bold text-slate-900">
            Register Your School
          </h1>

          <p className="mt-2 text-base text-slate-600">
            Complete the following steps to create your school's ERP account.
          </p>

        </div>
      )}

      {/* Stepper */}

      {currentStep !== 4 && (
        <div className="mb-8">
          <Stepper currentStep={currentStep} />
        </div>
      )}

      {/* Form Card */}

      {currentStep !== 4 ? (
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:p-8">
          {renderStep()}
        </div>
      ) : (
        renderStep()
      )}

    </div>
  );
}

export default SchoolRegisterWizard;