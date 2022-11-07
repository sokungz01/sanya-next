import React from "react";

const StepBar = ({
  step,
  setStep,
  maxStep,
}: {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  maxStep: number;
}) => {
  return (
    <div className="flex space-x-6 justify-center text-main py-2">
      {/* Left */}
      <button
        onClick={(step) => setStep((step) => (step >= 2 ? step - 1 : step))}
      >
        &lt; ย้อนกลับ{" "}
      </button>
      <span>
        {step}/{maxStep}
      </span>
      {/* Right */}
      <button
        onClick={(step) =>
          setStep((step) => (step < maxStep ? step + 1 : step))
        }
      >
        ถัดไป &gt;{" "}
      </button>
    </div>
  );
};

export default StepBar;
