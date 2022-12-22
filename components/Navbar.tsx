import Link from "next/link";
import Image from "next/image";
import React from "react";
import { useEffect, useState, useRef } from "react";
import { useSession, signIn, signOut, getSession } from "next-auth/react";
import sanyaLogo from "../public/asset/svg/sanyaLogo.svg";
import {
  MagnifyingGlassIcon,
  UserIcon,
  Bars3Icon
} from "@heroicons/react/24/outline";
import Bar3Dropdown from "./Bar3Dropdown";
import LoginDropDown from "./LoginDropdown";
import LanguageDropDown from "./LanguageDropdown";
import UserDropDown from "./UserDropDown";
export default function Navbar({ route }: { route: string }) {
  const [state, setState] = useState(false);
  const { data: session, status } = useSession();
  const loading = status === "loading";
  const navRef = useRef();

  // Replace # path with your path
  const navigation = [
    { title: "หน้าแรก", path: "/" },
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
    <nav className="bg-[#1A445E] w-full top-0 z-20">
      <div className="items-center px-4 max-w-screen-xl mx-auto lg:flex xl:flex">
        <div className="flex items-center justify-between py-3 lg:py-4 lg:block xl:py-4 xl:block">
          <Link href={"/"}>
              <a>
                <Image src={sanyaLogo} alt="mitr sanya" width={150} height={60} />
              </a>
            </Link>
          <div className="lg:hidden xl:hidden">
            <button
              className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
              onClick={() => setState(!state)}
            >
              {state ? (
                <Bars3Icon className="h-5 w-5 text-white" />
              ) : (
                <Bars3Icon className="h-5 w-5 text-white" />
              )}
            </button>
          </div>
        </div>
        <div
          className={`flex-1 justify-between flex-row-reverse xl:flex xl:pb-0 xl:pr-0 xl:h-auto lg:flex lg:pb-0 lg:pr-0 lg:h-auto ${
            state ? "h-screen pb-20 overflow-auto pr-4" : "hidden"
          }`}
        >
          <div className="float-right">
            <ul className="text-sm flex flex-col-reverse space-x-0 lg:space-x-6 lg:flex-row xl:space-x-8 xl:flex-row">
              {status == "authenticated" ? (
                <li className="  inline">
                  <UserDropDown
                    name={session.user.name}
                    email={session.user.email}
                    image={session.user.image}
                  />
                </li>
              ) : (
                <>
                  <li className="mt-2 lg:-mt-1 xl:mt-0">
                      <LoginDropDown
                      name="เข้าสู่ระบบ"
                      menu1="บุคคลทั่วไป"
                      link1="customer/login"
                      menu2="ทนายความ"
                      link2="#"
                      />
                  </li>
                  <li className="mt-2 lg:mt-1 xl:mt-1">
                    <Link href="#">
                      <a className="lg:px-0 xl:px-0 xl:py-1 py-2 px-4 rounded-full text-white hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white">
                      <UserIcon className="h-5 w-5 text-white inline mr-1 -mt-1" />
                        ลงทะเบียน
                      </a>
                    </Link>
                  </li>
                </>
              )}
              <li className="lg:mt-1 xl:mt-1">
                <MagnifyingGlassIcon className="h-5 w-5 text-white" />
              </li>
              <li className="lg:mt-1 xl:mt-1">
                <Bar3Dropdown
                  menu1="วิธีใช้"
                  link1="#"
                  menu2="ตั้งค่า"
                  link2="#"
                />
              </li>
              <li className="lg:mt-1 xl:mt-1">
                <LanguageDropDown 
                  name="TH"
                  menu1="TH"
                  menu2="EN"
                  />
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <ul className="text-sm justify-center items-center space-y-8 lg:flex lg:space-x-6 lg:space-y-0 xl:flex xl:space-x-10 xl:space-y-0">
              {navigation.map((item, idx) => {
                return (
                  <li key={idx} className="text-white ">
                    <Link href={`${item.path}`}>
                      <a
                        className={
                          route === item.path
                            ? // route.includes(item.path)
                              "lg:px-0 xl:px-0 xl:py-1 py-2 px-2.5 text-black bg-white rounded-full active"
                            : "lg:px-0 xl:px-0 xl:py-1 py-2 px-2.5 rounded-full hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
                        }
                      >
                        {item.title}
                      </a>
                    </Link>
                  </li>
                );
              })}
              {/* Sanya Academy */}
              <li className="text-white font-bold bg-academy px-2 py-1 rounded-full">
                <Link href={"#"}>
                  <a>Sanya Academy</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
