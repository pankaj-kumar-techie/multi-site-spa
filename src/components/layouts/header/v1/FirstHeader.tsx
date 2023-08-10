import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../../../themes/ThemeProvider";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";

export default function FirstHeader(props: { data: any }) {
  const isMobile = window.innerWidth <= 767;
  const { theme } = useContext(ThemeContext);
  const [headerData, setHeaderData] = useState<any>({
    contactUs: { phone: "1234567890", email: "XXXXXXXXXXXXXXXX" }, // Default values
  });
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("white");
        setTextColor("black");
      } else {
        setColor("transparent");
        setTextColor("#ffffff");
      }
    };
    window.addEventListener("scroll", changeColor);
    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);

  useEffect(() => {
    if (props.data) {
      setHeaderData(props.data);
    }
  }, [props.data]);

  return (
    <div
      style={{ backgroundColor: color }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300"
    >
      {isMobile ? (
        <div className="max-w-[767px] m-auto text-center p-4 text-white">
          <div className="flex justify-between items-center">
            <Link className="flex items-center text-xs mr-2 " to={`tel:${headerData.contactUs.phone}`}>
              <BsFillTelephoneFill className="mr-1 rounded-full bg-sky-300 p-2 h-8 w-8" />{" "}
              {headerData.contactUs.phone}
            </Link>
            <Link className="flex items-center" to="/#gallery">
              <GrMail className="mr-1 rounded-full bg-sky-300 p-2 h-8 w-8" />{" "}
              {headerData.contactUs.email}
            </Link>
          </div>
          <Link to="/">
            <h1
              style={{ color: textColor }}
              className="font-bold text-2xl lg:text-3xl"
            >
              {headerData.title ?? "Site Name"}
            </h1>
          </Link>
        </div>
      ) : (
        <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
          <Link to="/">
            <h1
              style={{ color: textColor }}
              className="font-bold text-2xl lg:text-3xl"
            >
              {headerData.title ?? "Site Name"}
            </h1>
          </Link>
          <ul style={{ color: textColor }} className="hidden sm:flex">
            <li className="pr-5">
              <Link className="flex items-center" to={`tel:${headerData.contactUs.phone}`}>
                <BsFillTelephoneFill className="mr-5 text-[20px] rounded-full bg-sky-300 p-4 h-16 w-full" />{" "}
                {headerData.contactUs.phone}
              </Link>
            </li>
            <li className="p-0">
              <Link className="flex items-center" to="/#gallery">
                <GrMail className="mr-5 rounded-full bg-sky-300 p-4 h-16 w-16" />{" "}
                {headerData.contactUs.email}
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
