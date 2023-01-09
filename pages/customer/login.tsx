import React from "react";
import { signIn, getSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import Input  from "../../components/input";
import sanyaLogo from "../../public/asset/svg/sanyaLogo.svg";
import { UserIcon } from "@heroicons/react/24/outline";
export default function Login({ providers }: { providers: any[] }) {
  return (
    <div className="bg-zinc-100">
      <div className="bg-sign-paper bg-no-repeat bg-cover bg-blend-overlay xs:bg-zinc-100 sm:bg-zinc-100">
        <div className="md:container lg:container xl:container flex xl:items-center lg:items-center md:items-center justify-center min-h-screen sm:min-h-0 sm:max-h-full xs:min-h-0 xs:max-h-full mx-auto">
          <div className="w-full max-w-xl">
            <div className="backdrop-blur-md bg-white/75 rounded-2xl p-24 sm:p-12 sm:my-4 xs:m-4">
          
           
              <div className="flex justify-center">
               <div className="bg-navbar rounded-full py-[1rem]">
               <Image src={sanyaLogo} alt="sanyaLogo" width={100} height={55} className=""/>
               </div>
              </div>
              <h1 className="text-2xl text-center font-semibold text-navbar capitalize">
                เข้าสู่ระบบ
              </h1>
               <div className="flex justify-center mt-1">
                <select className="text-center block py-2.5 px-0 w-1/2 text-sm text-navbar bg-transparent border rounded-xl border-navbar focus:outline-none focus:ring-0 peer">
                    <option selected value="member">
                      บุคคลทั่วไป
                    </option>
                    <option value="lawyer"> 
                      ทนายความ
                    </option>
                </select>
               </div>
              <form>
              <div className="relative flex items-center mt-1">
                <span className="absolute mt-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mx-3 text-gray-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </span>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  label="E-mail"
                  placeholder="กรุณากรอก E-mail"
                />
              </div>
              <div className="relative flex items-center mt-4">
                <Input
                  type="password"
                  name="password"
                  id="password"
                  label="Password"
                  placeholder="กรุณากรอกรหัสผ่าน"
                ></Input>
                <span className="absolute mt-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </span>
              </div>
              <div className="flex justify-between mt-2">
                <div className="flex">
                  <Input type="checkbox" name="stayLogin" id="stayLogin"/>
                  <p className="ml-1 xs:text-sm sm:text-sm xs:mt-1 sm:mt-1">จดจำการเข้าสู่ระบบ</p>
                </div>
                <Link href="#">
                  <a className="ml-1 xs:text-sm sm:text-sm xs:mt-1 sm:mt-1 text-navbar underline">
                    ลืมรหัสผ่าน
                  </a>
                </Link>
              </div>
              <div className="mt-6">
                <button
                  className="w-full px-6 py-3 text-m font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-sub rounded-full  focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                  onClick={() => signIn("email")}
                >
                  เข้าสู่ระบบ
                </button>

                <p className="mt-4 text-center text-black">
                  หรือ
                </p>
                {/* Google Login */}
                <div className="flex">
                  <a className="flex rounded-full items-center justify-center px-6 py-3 mt-4 text-white w-1/2 bg-blue-700 cursor-pointer transition-colors duration-300 transform border hover:bg-blue-600 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-facebook w-6 h-6 sm:w-4 sm:h-4"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
                        fill="white"
                      ></path>
                    </svg>

                    <span className="ml-2 sm:text-sm ">Facebook</span>
                  </a>
                  <a
                    className="flex rounded-full items-center justify-center px-6 py-3 mt-4 text-gray-600 bg-white  w-1/2 ml-2 cursor-pointer transition-colors duration-300 transform border hover:bg-gray-50 "
                    onClick={() => signIn("google", { callbackUrl: "/" })}
                  >
                    <svg className="w-6 h-6 sm:w-4 sm:h-4" viewBox="0 0 40 40">
                      <path
                        d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                        fill="#FFC107"
                      />
                      <path
                        d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                        fill="#FF3D00"
                      />
                      <path
                        d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                        fill="#4CAF50"
                      />
                      <path
                        d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                        fill="#1976D2"
                      />
                    </svg>
                    <span className="mx-2 sm:text-sm ">Google</span>
                  </a>
                </div>
                {/* FaceBook Login */}
                <div className="mt-6 text-center ">
                  หากคุณยังไม่เป็นสมาชิก
                  <Link href="/register">
                    <a className="text-navbar underline ml-1">
                      สมัครสมาชิก
                    </a>
                  </Link>
                </div>
              </div>
            </form>
            </div>
            <div className="flex justify-center mt-2 text-navbar sm:mb-8">
              <Link href="/">
                <a className="mx-2"> 
                  กลับหน้าแรก 
                </a>
              </Link>
              <p> | </p>
              <Link href="/help"> 
                <a className="mx-2"> 
                  ช่วยเหลือ 
                </a>
              </Link>
              <p> | </p>
              <a className="mx-2"> ภาษาไทย </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export const getServerSideProps = async (context: any) => {
  const session = await getSession(context);
  if (session) {
    return {
      redirect: {
        destination: "/",
      },
    };
  }
  return {
    props: { session },
  };
};
