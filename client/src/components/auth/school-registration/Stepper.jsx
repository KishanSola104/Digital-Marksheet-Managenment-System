import { Check } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "School",
    description: "School Details",
  },
  {
    id: 2,
    title: "Administrator",
    description: "Admin Details",
  },
  {
    id: 3,
    title: "Review",
    description: "Confirm Details",
  },
  {
    id: 4,
    title: "Complete",
    description: "Registration Done",
  },
];

function Stepper({ currentStep }) {
  return (
    <div className="w-full">

      {/* Desktop */}

      <div className="hidden md:flex items-center justify-between">

        {steps.map((step, index) => {
          const completed = currentStep > step.id;
          const active = currentStep === step.id;

          return (
            <div
              key={step.id}
              className="flex flex-1 items-center"
            >

              <div className="flex flex-col items-center">

                {/* Circle */}

                <div
                  className={`
                    flex h-11 w-11 items-center justify-center rounded-full border-2 text-sm font-semibold transition-all duration-300
                    ${
                      completed
                        ? "border-green-600 bg-green-600 text-white"
                        : active
                        ? "border-blue-600 bg-blue-600 text-white"
                        : "border-slate-300 bg-white text-slate-500"
                    }
                  `}
                >
                  {completed ? (
                    <Check size={18} />
                  ) : (
                    step.id
                  )}
                </div>

                {/* Label */}

                <div className="mt-3 text-center">

                  <p
                    className={`text-sm font-semibold ${
                      active
                        ? "text-blue-700"
                        : completed
                        ? "text-green-700"
                        : "text-slate-500"
                    }`}
                  >
                    {step.title}
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    {step.description}
                  </p>

                </div>

              </div>

              {/* Connector */}

              {index !== steps.length - 1 && (
                <div
                  className={`mx-4 h-1 flex-1 rounded-full ${
                    completed
                      ? "bg-green-600"
                      : "bg-slate-200"
                  }`}
                />
              )}

            </div>
          );
        })}
      </div>

      {/* Mobile */}

      <div className="md:hidden">

        <div className="mb-3 flex items-center justify-between">

          <span className="text-sm font-semibold text-slate-700">
            Step {currentStep} of {steps.length}
          </span>

          <span className="text-sm text-blue-700 font-medium">
            {steps[currentStep - 1].title}
          </span>

        </div>

        <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200">

          <div
            className="h-full rounded-full bg-blue-600 transition-all duration-500"
            style={{
              width: `${(currentStep / steps.length) * 100}%`,
            }}
          />

        </div>

      </div>

    </div>
  );
}

export default Stepper;