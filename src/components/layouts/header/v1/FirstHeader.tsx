import React, { useContext, useEffect, useState } from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../../../themes/ThemeProvider";

interface HeaderImage {
  imageSrc: string;
  imageAlt: string;
}

interface HeaderData {
  title: string;
  images: HeaderImage[];
  contactUs: {
    phone: string;
    email: string;
  };
}

export default function FirstHeader(props: { data: HeaderData }) {
  const isMobile = window.innerWidth <= 767;
  const { theme } = useContext(ThemeContext);
  const [headerData, setHeaderData] = useState<HeaderData>({
    title: "",
    images: [],
    contactUs: { phone: "1234567890", email: "XXXXXXXXXXXXXXXX" },
  });
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("white");
        setTextColor("black");
      } else {
        setColor("transparent");
        setTextColor("white"); // Change this to white for better contrast
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
      <div
        className={`max-w-${isMobile ? "767" : "1240"
          } m-auto ${isMobile ? "flex justify-between items-center" : "text-center"
          } p-4 text-${isMobile ? "black" : "black"}`}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center">
          {headerData.images && headerData.images.length > 0 ? (
            <img
              className={`w-${isMobile ? "14" : "20"} h-${isMobile ? "14" : "20"} object-contain rounded-full mr-2`}
              src={headerData.images[0].imageSrc}
              alt={headerData.images[0].imageAlt}
            />
          ) : (
            <span style={{ color: textColor }} className="font-bold text-2xl lg:text-3xl">
              {headerData.title || "Site Name"}
            </span>
          )}
        </Link>

        {/* Call Now Button */}
        <Link
          className={`flex items-center text-xs ml-${isMobile ? "auto" : "2"} ${isMobile ? "" : "hidden sm:flex"
            }`}
          to={`tel:${headerData.contactUs.phone}`}
        >
          <BsFillTelephoneFill className="ml-2 text-[20px] rounded-full bg-sky-300 p-3 h-9 w-10" />
          <span className="whitespace-nowrap font-semibold">Call Now</span>
        </Link>
      </div>
    </div>
  );
}
