"use client";

import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

interface Step {
  id: number;
  label: string;
}

const Stepper: React.FC = () => {
  const pathname = usePathname();
  const [currentStep, setCurrentStep] = useState<number>(1);
  useEffect(() => {
    if (pathname === "/resume/confirm-your-profile") {
      setCurrentStep(2);
    }
    if (pathname === "/resume/drop-resume") {
      setCurrentStep(3);
    }
  }, [pathname]);
  const steps: Step[] = [
    { id: 1, label: "Create Your Profile" },
    { id: 2, label: "Confirm Your Profile" },
    { id: 3, label: "Drop Resume" },
    { id: 4, label: "Your preferences (Optional)" },
  ];

  const formatStepNumber = (id: number): string => {
    return id.toString().padStart(2, "0");
  };

  return (
    <div className="flex flex-col items-center font-sans">
      {/* Stepper */}
      <div className="flex lg:flex-row flex-col lg:items-center">
        {steps.map((step, index) => (
          <div key={step.id} className="flex lg:flex-row flex-col items-center relative">
            <div className="flex items-center lg:flex-row flex-col">
              {/* Step Circle */}
              <div className="flex items-center justify-center w-8 h-8 relative">
                {currentStep === step.id ? (
                  <img
                    src="/Images/current-step.png"
                    alt={`Step ${formatStepNumber(step.id)}`}
                    className="w-8 h-8 "
                  />
                ) : (
                  <div
                    className={`flex items-center justify-center w-8 h-8 rounded-full border-2 ${currentStep > step.id
                      ? "bg-[#0162DD] border-blue-500 text-white"
                      : "text-[12px] border-gray-300"
                      }`}
                  >
                    {currentStep > step.id ? (
                      <span>
                        <img
                          src="/Images/tick2.png"
                          alt={`Step ${formatStepNumber(step.id)}`}
                          className="w-3 h-3 "
                        />
                      </span>
                    ) : (
                      <span>{formatStepNumber(step.id)}</span>
                    )}
                  </div>
                )}
              </div>

              {/* Step Label */}
              <div className="lg:absolute static lg:-bottom-7 lg:mt-0 mt-1 whitespace-nowrap text-center">
                <span
                  className={`text-sm ${currentStep > step.id
                    ? "text-[#0162DD]"
                    : currentStep === step.id
                      ? ""
                      : ""
                    } ${step.label === "Your preferences (Optional)"
                      ? "lg:-ml-16"
                      : step.label === "Drop Resume"
                        ? "lg:-ml-6"
                        : "lg:-ml-10"
                    }`}
                >
                  {step.label}
                </span>
              </div>


            </div>

            {/* Connector Line - Horizontal for lg and above, Vertical for below lg */}
            {index < steps.length - 1 && (
              <>
                {/* Horizontal line for lg and above */}
                <div
                  className={`hidden lg:block w-[5rem] md:w-[10rem] xl:w-[14rem] h-[3px] ${currentStep > step.id
                    ? "bg-[#0162DD]"
                    : "border-t-[3px] border-dotted border-gray-300"
                    }`}
                ></div>

                {/* Vertical line for below lg */}
                <div
                  className={`lg:hidden h-8 w-1 my-2 mx-auto ${currentStep > step.id
                    ? "bg-[#0162DD]"
                    : "border-l-[3px] border-dotted border-gray-300"
                    }`}
                ></div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stepper;
