import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MenuItem } from "../../../modal/Section";
import { ThemeContext } from "../../../themes/ThemeProvider";

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
                </div>
            </div>
        </>
    );
}
