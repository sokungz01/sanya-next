import React, { useState } from "react";

const LanguageDropDown = ({
  name,
  menu1,
  menu2,
}: {
  name: string;
  menu1: string;
  menu2: string;
}) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <button
        className="text-[#1A445E] bg-white text-xs rounded-lg pl-1 pr-1 pt-2 pb-2 -mt-2 sm:hidden md:hidden"
        onClick={() => setShow(!show)}
      >
        <span className="mx-2">{name}</span>
      </button>
      {show ? (
        <div className="absolute text-sub right-4 w-12 overflow-hidden bg-white rounded-md shadow-xl ">
          <div
            className="flex flex-row items-center px-4 py-3 text-sm  cursor-pointer text-sub  transition-colors duration-200 transform hover:bg-gray-100 "
            onClick={() => setShow(false)}
          >
            <a> {menu1} </a>
          </div>
          <hr />
          <div className="flex flex-row items-center px-4 py-3 text-sm  cursor-pointer text-sub  transition-colors duration-200 transform  hover:bg-gray-100 ">
            <a> {menu2} </a>
          </div>
        </div>
      ) : null}
      <div className="lg:hidden xl:hidden">
        <a className="font-bold text-navbartext-navbar ml-4 flex -mt-3 -mb-3 bg-gray-200 ">
          <p className="ml-4 w-[90%]  text-navbar"> ภาษา </p>
          <p className=" lg:hidden xl:hidden text-2xl text-black "> {menu1}</p>
        </a>
      </div>
    </>
  );
};
export default LanguageDropDown;