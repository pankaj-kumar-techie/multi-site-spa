import React, { useEffect, useState } from 'react';
import { MenuItem } from '../../../modal/Section';

export default function ThirdHeader({ data }: { data: any }) {
  const [headerData, setHeaderData] = useState<any>({});
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (data) {
      setHeaderData(data);
    }
  }, [data]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-teal-500">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-6">
        {/* Logo or Title */}
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          {headerData.logo ? (
            <img
              className="w-12 h-12 object-contain rounded-full mr-2"
              src={headerData.logo.imageSrc}
              alt={headerData.logo.imageAlt}
            />
          ) : (
            <span className="font-bold text-2xl">
              {headerData.title || 'Site Name'}
            </span>
          )}
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle navigation"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>

        {/* Desktop Menu */}
        <div
          className={`${isMenuOpen ? 'block' : 'hidden'
            } w-full md:flex md:w-auto md:order-1`}
          id="navbar-user"
        >
          {headerData.menu && (
            <ul className="flex flex-col p-4 mt-4 border rounded-lg bg-teal-500 md:p-0 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent">
              {headerData.menu.map((menuItem: MenuItem) => (
                <li key={menuItem.id}>
                  <a
                    href={menuItem.url}
                    className="block py-2 px-3 text-white rounded hover:bg-teal-600 md:hover:bg-transparent md:hover:text-white"
                    aria-current="page"
                  >
                    {menuItem.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
}
