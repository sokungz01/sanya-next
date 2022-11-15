import React from "react";
import { signIn,getSession } from "next-auth/react";
import Link from "next/link";
export default function Login({ providers }: { providers: any[] }) {
  return (
    <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
      <div className="w-full max-w-md">
        <form>
          {/* Image Logo Sanya */}
          <h1 className="text-3xl text-center font-semibold text-main capitalize dark:text-white">
            เข้าสู่ระบบ
          </h1>

          <div className="relative flex items-center mt-8">
            <span className="absolute">
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
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </span>
            <input
              type="email"
              name="email"
              id="email"
              className="block w-full py-3 text-gray-700 bg-white border rounded-md px-11 dark:bg-gray-900 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Email"
            />
          </div>

          <div className="relative flex items-center mt-4">
            <input
              type="password"
              className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              name="password"
              id="password"
              placeholder="Password"
            ></input>
            <span className="absolute">
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
          <div className="mt-6">
            <button
              className="w-full px-6 py-3 text-m font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-sub rounded-full  focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
              onClick={() => signIn("email")}
            >
              เข้าสู่ระบบ
            </button>

            <div className="mt-6 text-center ">
              หากคุณยังไม่เป็นสมาชิก{" "}
              <Link href="/register">
                <a className="text-sm text-blue-500 underline  dark:text-white">
                  สมัครสมาชิกทนาย
                </a>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
export const getServerSideProps = async (context:any) => {
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
