import React, { Dispatch, SetStateAction } from "react";

function TabBar({
  active,
  setActive,
  tabs,
}: {
  active: string;
  setActive: Dispatch<SetStateAction<string>>;
  tabs: string[];
}) {
  return (
    <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
      {tabs?.map((tab) => (
        <li className="mr-2" key={tab}>
          <a
            href="#"
            aria-current="page"
            onClick={() => setActive(tab)}
            className={
              active == tab
                ? "inline-block py-3 px-4 text-white bg-blue-600 rounded-full active"
                : "inline-block py-3 px-4 text-grey  rounded-full hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
            }
          >
            {tab}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default TabBar;
