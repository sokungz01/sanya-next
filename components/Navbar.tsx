import Link from "next/link";
import Image from "next/image";
import React from "react";
import { useEffect, useState, useRef } from "react";
import sanyaLogo from "../public/asset/svg/sanyaLogo.svg";

export default function Navbar({ route }: { route: string }) {
  const [state, setState] = useState(false);
  const navRef = useRef();

  // Replace # path with your path
  const navigation = [
    { title: "หน้าแรก", path: "/home" },
    { title: "บริการ", path: "/service" },
    { title: "ชุมชน", path: "/community" },
    { title: "ช่วยเหลือ", path: "/help" },
    { title: "ติดต่อเรา", path: "/contact-us" },
    { title: "เกี่ยวกับเรา", path: "/about-us" },
  ];
  useEffect(() => {
    const body = document.body;

    // Disable scrolling
    const customBodyStyle = ["overflow-hidden", "lg:overflow-visible"];
    if (state) body.classList.add(...customBodyStyle);
    // Enable scrolling
    else body.classList.remove(...customBodyStyle);
  }, [state]);
  return (
    <nav className="bg-topbar w-full top-0 z-20">
      <div className="items-center px-4 max-w-screen-xl mx-auto lg:flex lg:px-8">
        <div className="flex items-center justify-between py-3 lg:py-4 lg:block">
          <Link href={"/"}>
            <a>
              <Image src={sanyaLogo} alt="mitr sanya" width={150} height={60} />
            </a>
          </Link>
          <div className="lg:hidden">
            <button
              className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
              onClick={() => setState(!state)}
            >
              {state ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          className={`flex-1 justify-between flex-row-reverse lg:overflow-visible lg:flex lg:pb-0 lg:pr-0 lg:h-auto ${
            state ? "h-screen pb-20 overflow-auto pr-4" : "hidden"
          }`}
        >
          <div className="float-right">
            <ul className="flex flex-col-reverse space-x-0 lg:space-x-6 lg:flex-row">
              <li className="mt-4 lg:mt-0">
                <Link
                  href="/login"
                  // className="py-3 px-4 text-center borde rounded-md block lg:inline lg:border-0"
                >
                  <a className="py-3 px-4 text-center borde rounded-md block lg:inline lg:border-0 text-white">
                    เข้าสู่ระบบ
                  </a>
                </Link>
              </li>
              <li className="mt-8 lg:mt-0">
                <a
                  href="#"
                  className="py-3 px-4 text-center text-white bg-main hover:text-white rounded-full shadow block lg:inline"
                >
                  ลงทะเบียน
                </a>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <ul className="justify-center items-center space-y-8 lg:flex lg:space-x-10 lg:space-y-0">
              {navigation.map((item, idx) => {
                return (
                  <li key={idx} className="text-white font-bold">
                    <Link href={`${item.path}`}>
                      {/* <a>{item.title}</a> */}
                      {/* <a>{item.title}</a> */}
                      <a
                        className={
                          route.includes(item.path)
                            ? " py-3 px-3 text-black bg-white rounded-full active"
                            : " py-3 px-3 rounded-full hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
                        }
                      >
                        {item.title}
                      </a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
