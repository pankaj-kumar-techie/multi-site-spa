import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../../../themes/ThemeProvider";
import { MenuItem } from "../../../../modal/Section";

export default function FirstHeader(props: { data: any }) {
    const { theme } = useContext(ThemeContext);
    const [headerData, setHeaderData] = useState<any>({});
    const [nav, setNav] = useState(false);
    const [color, setColor] = useState('transparent');
    const [textColor, setTextColor] = useState('white');
    const [isScrolled, setIsScrolled] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    useEffect(() => {
        const changeColor = () => {
            if (window.scrollY >= 90) {
                setColor('white');
                setTextColor('black');
            } else {
                setColor('transparent');
                setTextColor('#ffffff');
            }
        };
        window.addEventListener('scroll', changeColor);

        return () => {
            // Cleanup the scroll event listener when component unmounts
            window.removeEventListener('scroll', changeColor);
        };
    }, []);

    useEffect(() => {
        if (props.data) {
            setHeaderData(props.data);
        }
    }, [props.data]);

    return (
        <>
            <div style={{ backgroundColor: `${color}` }} className='fixed left-0 top-0 w-full z-10 ease-in duration-300'>
                <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-white'>
                    <Link to='/'>
                        {headerData.logo ? (
                            <img
                                className="w-12 h-12 object-contain rounded-full mr-2"
                                src={headerData.logo.imageSrc}
                                alt={headerData.logo.imageAlt}
                            />
                        ) : (
                            <span className={`font-bold text-2xl ${isScrolled ? "text-black" : "text-white"}`}>
                                {headerData.title || "Site Name"}
                            </span>
                        )}
                    </Link>
                    {headerData.menu && (
                        <ul style={{ color: `${textColor}` }} className='hidden sm:flex'>
                            {headerData.menu.map((menuItem: MenuItem) => (
                                <li key={menuItem.id} className='p-4'>
                                    <Link to={menuItem.url}>{menuItem.label}</Link>
                                </li>
                            ))}
                        </ul>
                    )}

                    {/* Mobile Button*/}
                    <div onClick={handleNav} className='block sm:hidden z-10'>
                        {nav ? (
                            <svg
                                stroke="currentColor"
                                style={{ color: `${textColor}` }}
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 1024 1024"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                {/* Include your mobile menu icon here */}
                            </svg>
                        ) : (
                            <svg
                                style={{ color: `${textColor}` }}
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 1024 1024"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                {/* Include your mobile menu close icon here */}
                            </svg>
                        )}
                    </div>
                    {/* Mobile Menu */}
                    <div
                        className={nav ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300' : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'}
                    >
                        <ul>
                            {headerData.menu && (
                                headerData.menu.map((menuItem: MenuItem) => (
                                    <li
                                        key={menuItem.id}
                                        onClick={handleNav}
                                        className='p-4 text-4xl hover:text-gray-500'
                                    >
                                        <Link to={menuItem.url}>{menuItem.label}</Link>
                                    </li>
                                ))
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
