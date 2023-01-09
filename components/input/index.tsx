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
    <div className="flex-1">
      <label
        htmlFor={id}
        className="block text-default font-medium text-gray-700"
      >
        {label ? label : placeholder}
      </label>
      <div className="">
        <input
          type={type}
          name={name}
          id={id}
          placeholder={placeholder}
          className="mt-1 block w-full px-10 py-3 text-gray-700 bg-white border rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
        />
      </div>
    </div>
  );
}

export default Input;
