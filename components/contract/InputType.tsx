import React from "react";
import { Dispatch, SetStateAction } from "react";
import { Obj } from "../../types/contract";
const InputType = ({
  type,
  label,
  name,
  id,
  placeholder,
  obj,
  setObj,
}: {
  type?: string | "text";
  label: string;
  name?: string;
  id?: string;
  placeholder?: string;
  obj?: string | number;
  setObj: Dispatch<SetStateAction<Obj>>;
  required?: boolean;
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!(e.target instanceof HTMLInputElement)) return;
    const { name, value } = e.target;
    setObj((obj) => ({
      ...obj,
      [name]: value,
    }));
    console.log(obj);
  };
  return (
    <div className="-mx-3 flex flex-wrap">
      <div className="w-full px-3 sm:w-1/2">
        <div className="mb-5">
          <label htmlFor={name} className="mb-3 block text-base font-medium ">
            {label}
          </label>
          <input
            type={type}
            name={name}
            id={id}
            placeholder={placeholder}
            onChange={handleChange}
            className="w-full rounded-md border  bg-white py-3 px-6 text-base font-medium text-main outline-none focus:border-main focus:shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default InputType;
