import React, { useState } from "react";

import {
  UserIcon,
  LockClosedIcon
} from "@heroicons/react/24/outline";
import Link from "next/link";

const LoginDropDown = ({
  name,
  menu1,
  link1,
  menu2,
  link2
}: {
  name : string;
  menu1: string;
  link1: string;
  menu2: string;
  link2: string;
}) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <button
        className="lg:px-0 xl:px-0 xl:py-1 py-2 px-4 rounded-full text-white hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
        onClick={() => setShow(!show)}
      >
        <LockClosedIcon className="h-5 w-5 text-white inline mr-1 -mt-1" />
        <span className="mx-2">{name}</span>

      </button>
      {show ? (
        <div className="absolute text-sub right-64 w-32 py-2 mt-2 overflow-hidden bg-white rounded-md shadow-xl ">
          <div
            className="flex flex-row items-center px-4 py-3 text-sm  cursor-pointer text-sub  transition-colors duration-200 transform hover:bg-gray-100 "
            onClick={() => setShow(false)}
          >
            <UserIcon className="h-4 2-4 mr-2" />
            <Link href={ link1 }>
              <a> {menu1} </a>
            </Link>
          </div>
          <hr />
          <div className="flex flex-row items-center px-4 py-3 text-sm  cursor-pointer text-sub  transition-colors duration-200 transform  hover:bg-gray-100 ">
            <UserIcon className="h-4 2-4 mr-2" />
            <Link href={ link2 }>
              <a> {menu2} </a>
            </Link>
          </div>
        </div>
      ) : null}
    </>
  );
};
export default  LoginDropDown;

