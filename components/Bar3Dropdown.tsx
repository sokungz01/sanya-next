import React, { useState } from "react";

import {
    Bars3Icon,
    Cog8ToothIcon,
    ClipboardDocumentIcon
} from "@heroicons/react/24/outline";
import Link from "next/link";

const Bar3DropDown = ({
  menu1,
  link1,
  menu2,
  link2
}: {
  menu1: string;
  link1: string;
  menu2: string;
  link2: string;
}) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <button
        className="lg:px-1 xl:px-1.5 xl:py-1 py-2 px-4 rounded-full text-white hover:text-gray-900 hover:bg-gray-100 md:hidden sm:hidden"
        onClick={() => setShow(!show)}
      >
        <Bars3Icon className="h-5 w-5 inline mr-1 -mt-1 " />

      </button>
      {show ? (
        <div className="absolute text-sub right-8 w-24 overflow-hidden bg-white rounded-md shadow-xl ">
          <Link href={ link1 }>
          <div
            className="flex flex-row items-center px-4 py-3 text-sm  cursor-pointer text-sub  transition-colors duration-200 transform hover:bg-gray-100 "
            onClick={() => setShow(false)}
          >
            <ClipboardDocumentIcon className="h-4 2-4 mr-2" />
              <a> {menu1} </a>
          </div>
          </Link>
          <hr />
          <Link href={ link2 }>
          <div
            className="flex flex-row items-center px-4 py-3 text-sm  cursor-pointer text-sub  transition-colors duration-200 transform hover:bg-gray-100 "
            onClick={() => setShow(false)}
          >
            <Cog8ToothIcon className="h-4 2-4 mr-2" />
              <a> {menu2} </a>
          </div>
          </Link>
        </div>
      ) : null}
       <div className="lg:hidden xl:hidden">
       <Link href={link1}>
          <a className="font-bold text-navbartext-navbar ml-4 flex -mt-3 -mb-3 bg-gray-200 ">
            <p className="ml-4 w-[93%]  text-navbar"> {menu1} </p>
            <p className=" lg:hidden xl:hidden text-2xl text-navbar "> &gt; </p>
          </a>
        </Link>
        <div className="lg:hidden xl:hidden">
          <hr className="h-px ml-2 my-8 bg-gray-300 border-0 w-full "/>
        </div>
        <Link href={link2}>
          <a className="font-bold text-navbartext-navbar ml-4 flex -mt-3 -mb-3 bg-gray-200 ">
            <p className="ml-4 w-[93%]  text-navbar"> {menu2} </p>
            <p className=" lg:hidden xl:hidden text-2xl text-navbar "> &gt; </p>
          </a>
        </Link>
      </div>
    </>
  );
};
export default  Bar3DropDown;

