import Link from "next/link";
import Image from "next/image";
import React from "react";
import { useEffect, useState, useRef } from "react";
import { useSession, signIn, signOut, getSession } from "next-auth/react";
import sanyaLogo from "../public/asset/svg/sanyaLogo.svg";
import {
  MagnifyingGlassIcon,
  UserIcon,
  Bars3Icon,
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
    <nav className="w-full top-0 z-20">
      <div className="bg-navbar items-center px-4 max-w-screen-xl mx-auto lg:flex xl:flex">
        <div className="flex items-center justify-between py-3 lg:py-4 lg:block xl:py-4 xl:block">
          <Link href={"/"}>
              <a>
                <Image src={sanyaLogo} alt="mitr sanya" width={150} height={60} />
              </a>
            </Link>
          <div className="lg:hidden xl:hidden flex">
            <div className="mt-2 mr-3">
              <MagnifyingGlassIcon className="h-5 w-5 text-white" />
            </div>
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
          className={`flex-1 justify-between flex-row xl:flex xl:pb-0 xl:pr-0 xl:h-auto lg:flex lg:pb-0 lg:pr-0 lg:h-auto ${
            state ? "h-screen pb-20 overflow-auto pr-4 bg-gray-200" : "hidden"
          }`}
        >
          <div className="flex-1 sm:order-1 md:order-1 sm:mt-12 md:mt-12">
            <ul className="text-sm sm:text-2xl md:text-2xl justify-center items-center space-y-8 lg:flex lg:space-x-6 lg:space-y-0 xl:flex xl:space-x-10 xl:space-y-0">
              {navigation.map((item, idx) => {
                return (
                  <li key={idx} className="text-white">
                    <Link href={`${item.path}`}>
                      <a
                        className={
                          route === item.path
                            ? // route.includes(item.path)
                              "lg:px-0 xl:px-0 xl:py-1 text-black bg-white rounded-full active sm:text-navbar md:text-navbar sm:bg-gray-200 md:bg-gray-200 sm:ml-4 md:ml-4 flex sm:-mt-3 md:-mt-3 sm:-mb-3 md:-mb-3" 
                            : "lg:px-0 xl:px-0 xl:py-1 rounded-full hover:text-gray-900 hover:bg-gray-200 sm:text-navbar md:text-navbar sm:ml-4 md:ml-4 flex sm:-mt-3 md:-mt-3 sm:-mb-3 md:-mb-3"
                        }
                      >
                        <p className="sm:ml-4 md:ml-4 sm:w-[93%] md:w-[93%]">{item.title}</p>
                        <p className=" lg:hidden xl:hidden text-2xl text-navbar "> &gt; </p>
                      </a>
                    </Link>
                    <div className="lg:hidden xl:hidden">
                      <hr className="h-px ml-2 my-8 bg-gray-300 border-0 w-full "/>
                    </div>
                  </li>
                );
              })}
              {/* Sanya Academy */}
              <li className="text-white">
                <Link href={"#"}>
                  <a className="font-bold bg-academy lg:px-0 xl:px-0 xl:py-1 rounded-full  sm:text-navbar md:text-navbar sm:ml-4 md:ml-4 flex sm:-mt-3 md:-mt-3 sm:-mb-3 md:-mb-3 sm:bg-gray-200 md:bg-gray-200">
                    <p className="sm:ml-4 md:ml-4 sm:w-[93%] md:w-[93%] sm:text-academy md:text-academy"> Sanya Academy </p>
                    <p className=" lg:hidden xl:hidden text-2xl text-navbar "> &gt; </p>
                  </a>
                </Link>
                <div className="lg:hidden xl:hidden">
                      <hr className="h-px ml-2 my-8 bg-gray-300 border-0 w-full "/>
                </div>
              </li>
            </ul>
          </div>
          <div className="">
            <ul className="text-sm sm:text-2xl md:text-2xl flex flex-col-reverse space-x-0 lg:space-x-6 lg:flex-row xl:space-x-8 xl:flex-row">
              {status == "authenticated" ? (
                <li className=" inline md:hidden sm:hidden">
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
                      <div className="lg:hidden xl:hidden">
                        <hr className="h-px ml-2 my-8 bg-gray-300 border-0 w-full "/>
                      </div>
                  </li>
                  <li className="">
                    <Link href="#">
                      <a className="flex xl:-mt-1 lg:px-4 xl:px-4 xl:py-2 lg:py-2 rounded-full text-white hover:text-gray-900 hover:bg-gray-100 md:hover:bg-gray-200 md:hover:text-navbar md:text-navbar sm:hover:bg-gray-200 sm:hover:text-navbar sm:text-navbar">
                      <UserIcon className="h-5 w-5 text-white inline mr-1 -mt-1 md:hidden sm:hidden" />
                      <p className="sm:ml-8 md:ml-8 sm:w-[90%] md:w-[91.5%] md:-mt-5 sm:-mt-5 -mb-4">ลงทะเบียน</p>
                      <p className=" lg:hidden xl:hidden text-2xl text-navbar -mt-5 -mb-4"> &gt; </p>
                      </a>
                    </Link>
                    <div className="lg:hidden xl:hidden">
                      <hr className="h-px ml-2 my-8 bg-gray-300 border-0 w-full "/>
                    </div>
                  </li>
                </>
              )}
              <li className="lg:mt-1 xl:mt-1 sm:hidden md:hidden">
                <MagnifyingGlassIcon className="h-5 w-5 text-white" />
              </li>
              <li className="lg:mt-1 xl:mt-1">
                <Bar3Dropdown
                  menu1="วิธีใช้"
                  link1="#"
                  menu2="ตั้งค่า"
                  link2="#"
                />
                <div className="lg:hidden xl:hidden">
                  <hr className="h-px ml-2 my-8 bg-gray-300 border-0 w-full "/>
                </div>
              </li>
              <li className="lg:mt-1 xl:mt-1">
                <LanguageDropDown 
                  name="TH"
                  menu1="TH"
                  menu2="EN"
                  />
                <div className="lg:hidden xl:hidden">
                  <hr className="h-px ml-2 my-8 bg-gray-300 border-0 w-full "/>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
