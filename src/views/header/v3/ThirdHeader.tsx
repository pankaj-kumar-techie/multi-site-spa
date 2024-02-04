import React, { useEffect, useState } from 'react'
import { MenuItem } from '../../../modal/Section';

export default function ThirdHeader(props: { data: any }) {
  const [headerData, setHeaderData] = useState<any>({});

  useEffect(() => {
    if (props.data) {
      setHeaderData(props.data);
    }
  }, [props.data]);
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-8">
        <a href="https://pahariyatri.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
          {headerData.logo ? (
            <img
              className="w-12 h-12 object-contain rounded-full mr-2"
              src={headerData.logo.imageSrc}
              alt={headerData.logo.imageAlt}
            />
          ) : (
            <span className={`font-bold text-2xl `}>
              {headerData.title || "Site Name"}
            </span>
          )}
        </a>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
          {headerData.menu && (
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {headerData.menu.map((menuItem: MenuItem) => (
                <li>
                  <a href={menuItem.url} key={menuItem.id} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 font-bold" aria-current="page">{menuItem.label}</a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </nav>
  )
}
