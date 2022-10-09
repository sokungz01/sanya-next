import Link from "next/link";
import React, { Dispatch, SetStateAction, useEffect } from "react";

type Tab = {
  slug: string;
  label: string;
};

function TabBar({ route, tabs }: { route: string; tabs: Tab[] }) {
  console.log(route, "asdf");
  return (
    <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
      {tabs?.map((tab) => (
        <li className="mr-2" key={tab.label}>
          <Link
            href={`${route.substring(0, route.lastIndexOf("/"))}/${tab.slug}`}
            // aria-current="page"
            // onClick={() => setActive(tab)}
          >
            <a
              className={
                route.includes(tab.slug)
                  ? "inline-block py-3 px-4 text-white bg-topbar rounded-full active"
                  : "inline-block py-3 px-4 text-grey  rounded-full hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
              }
            >
              {tab.label}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default TabBar;
