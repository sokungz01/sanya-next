import React from "react";

function InputOption({}: {}) {
  return (
    <div className="mb-5">
      <label className="mb-3 block text-base font-medium ">
        คุณต้องการสัญญารูปแบบไหน?
      </label>
      <div className="flex items-center space-x-6">
        <div className="flex items-center">
          <input
            type="radio"
            name="radio1"
            id="radioButton1"
            className="h-5 w-5"
          />
          <label htmlFor="radioButton1" className="pl-3 text-base font-medium ">
            1
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="radio"
            name="radio1"
            id="radioButton2"
            className="h-5 w-5"
          />
          <label htmlFor="radioButton2" className="pl-3 text-base font-medium ">
            2
          </label>
        </div>
      </div>
    </div>
  );
}

export default InputOption;
