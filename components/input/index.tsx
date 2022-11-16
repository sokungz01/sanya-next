import React, { InputHTMLAttributes } from "react";

function Input({
  type,
  label,
  name,
  id,
  placeholder,
}: {
  type: React.HTMLInputTypeAttribute | "text";
  label?: string;
  name?: string;
  id?: string;
  placeholder?: string;
}) {
  return (
    <div className="m-2 flex-1 ">
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700 ml-1"
      >
        {label ? label : placeholder}
      </label>
      <div className="">
        <input
          type={type}
          name={name}
          id={id}
          placeholder={placeholder}
          className="p-2 shadow-md focus:ring-indigo-500 focus:border-topbar block w-full sm:text-sm border-gray-200 rounded-md"
        />
      </div>
    </div>
  );
}

export default Input;
