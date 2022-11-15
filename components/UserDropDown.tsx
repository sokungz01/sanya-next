import React, { useState } from "react";
import { useSession, signOut, getSession } from "next-auth/react";
import Image from "next/image";
import {
  UserIcon,
  HeartIcon,
  LockOpenIcon,
  ChatBubbleBottomCenterTextIcon,
  ShoppingBagIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
const UserDropDown = ({
  name,
  email,
  image,
}: {
  name: string;
  email: string;
  image: string;
}) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <button
        className="z-10 flex items-center text-sm text-white hover:bg-gray-200 hover:text-main border border-transparent rounded-md focus:border-blue-500 focus:ring-opacity-40 dark:focus:ring-opacity-40 focus:ring-blue-300 dark:focus:ring-blue-400 focus:ring dark:text-white dark:bg-gray-800 focus:outline-none"
        onClick={() => setShow(!show)}
      >
        {/* <BeakerIcon className="h-5 w-5 text-blue-500 bg-red-500" /> */}
        <div className="h-10 w-10 relative">
          <Image
            src={image}
            alt="user"
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>
        <span className="mx-2">{name}</span>
        <svg
          className="w-5 h-5 mx-1"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 15.713L18.01 9.70299L16.597 8.28799L12 12.888L7.40399 8.28799L5.98999 9.70199L12 15.713Z"
            fill="currentColor"
          ></path>
        </svg>
      </button>
      {show ? (
        <div className="absolute text-sub right-0 z-20 w-56 py-2 mt-2 overflow-hidden bg-white rounded-md shadow-xl dark:bg-gray-800">
          <a
            href="#"
            className="flex items-center p-3 -mt-2 text-sm text-gray-600 transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <div className="mx-1">
              <h1 className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                {name}
              </h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {email}
              </p>
            </div>
          </a>

          <hr className="border-gray-200 dark:border-gray-700 " />

          <div
            className="flex flex-row items-center px-4 py-3 text-sm  cursor-pointer text-sub  transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
            onClick={() => setShow(false)}
          >
            <UserIcon className="h-4 2-4 mr-2" />
            <Link href={"/profile/"+email+"/personal"}>
              <a>บัญชีของฉัน</a>
            </Link>
          </div>
          <div className="flex flex-row items-center px-4 py-3 text-sm  cursor-pointer text-sub  transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
            <ChatBubbleBottomCenterTextIcon className="h-4 2-4 mr-2" />
            <Link href={"/profile"}>
              <a>ข้อความและออเดอร์</a>
            </Link>
          </div>
          <div className="flex flex-row items-center px-4 py-3 text-sm  cursor-pointer text-sub  transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
            <HeartIcon className="h-4 2-4 mr-2" />
            <Link href={"/profile"}>
              <a>รายการที่ชื่นชอบ ()</a>
            </Link>
          </div>
          <div className="flex flex-row items-center px-4 py-3 text-sm  cursor-pointer text-sub  transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
            <ShoppingBagIcon className="h-4 2-4 mr-2" />
            <Link href={"/profile"}>
              <a>ตะกร้าของฉัน</a>
            </Link>
          </div>
          <div
            className="flex flex-row items-center px-4 py-3 text-sm  cursor-pointer text-sub  transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
            onClick={() => signOut()}
          >
            <LockOpenIcon className="h-4 2-4 mr-2" /> Logout
          </div>
        </div>
      ) : null}
    </>
  );
};

export default UserDropDown;
