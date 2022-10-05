import React from "react";

function Input({
  type,
  name,
  id,
  placeholder,
}: {
  type: string;
  name: string;
  id: string;
  placeholder: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {placeholder}
      </label>
      <div className="mt-1">
        <input
          type={type}
          name={name}
          id={id}
          placeholder={placeholder}
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
        />
      </div>
    </div>
  );
}

export default Input;
