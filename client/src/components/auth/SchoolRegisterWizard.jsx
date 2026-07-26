import { useState } from "react";

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
  Registration Form Data
  ---------------------------------------------------
  */

  const [formData, setFormData] = useState({
    school: {
      schoolName: "",
      officialEmail: "",
      contactNumber: "",
      address: "",
      website: "",
      establishmentYear: "",
    },

    admin: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
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

      console.log(formData);

      /*
      Later

      const response = await registerSchool(formData);

      if (response.success) {

        setSchoolInfo({
          schoolCode: response.school.schoolCode,
          adminEmployeeId: response.admin.employeeId,
          email: response.email,
        });

        setCurrentStep(4);
      }

      */

      setTimeout(() => {
        setLoading(false);
        setCurrentStep(4);
      }, 1200);
    } catch (error) {
      console.error(error);
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
            schoolCode="SCH-000001"
            adminEmployeeId="EMP-000001"
            email={formData.admin.email}
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