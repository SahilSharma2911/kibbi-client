"use client"

import React, { useState } from "react";

interface Step {
  id: number;
  label: string;
}

const Stepper: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);

  const steps: Step[] = [
    { id: 1, label: "Create Your Profile" },
    { id: 2, label: "Confirm Your Profile" },
    { id: 3, label: "Drop Resume" },
    { id: 4, label: "Your preferences (Optional)" },
  ];

  const handleNext = (): void => {
    if (currentStep < steps.length) setCurrentStep(currentStep + 1);
  };

  const handlePrevious = (): void => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  return (
    <div className="flex flex-col items-center">
      {/* Stepper */}
      <div className="flex items-center space-x-4">
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-center">
            {/* Step Circle */}
            <div
              className={`flex items-center justify-center w-8 h-8 rounded-full border-2 ${currentStep > step.id
                  ? "bg-blue-500 border-blue-500 text-white" : currentStep === step.id ? "bg-blue-100 border-blue-500 text-blue-500" : "bg-gray-100 border-gray-300 text-gray-500"
                }`}
            >
              {currentStep > step.id ? (
                <span>&#10003;</span> // Checkmark
              ) : (
                <span>{step.id}</span>
              )}
            </div>

            {/* Line Connector */}
            {index < steps.length - 1 && (
              <div
                className={`h-1 w-40 ${currentStep > step.id ? "bg-blue-500" : "bg-gray-300"
                  }`}
              ></div>
            )}
          </div>
        ))}
      </div>

      {/* Step Labels */}
      <div className="flex justify-between w-full max-w-2xl mt-4">
        {steps.map((step) => (
          <div
            key={step.id}
            className={`text-sm ${currentStep >= step.id ? "text-blue-500" : "text-gray-500"
              }`}
          >
            {step.label}
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="mt-6">
        <button
          onClick={handlePrevious}
          className="px-4 py-2 mr-2 text-white bg-gray-500 rounded disabled:opacity-50"
          disabled={currentStep === 1}
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          className="px-4 py-2 text-white bg-blue-500 rounded disabled:opacity-50"
          disabled={currentStep === steps.length}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Stepper;
