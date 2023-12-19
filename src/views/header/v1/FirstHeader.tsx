import React, { useContext, useEffect, useState } from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../../themes/ThemeProvider";


export default function FirstHeader(props: { data: any }) {
  const { theme } = useContext(ThemeContext);
  const [headerData, setHeaderData] = useState<any>({
    title: "",
    contactUs: { phone: "1234567890", email: "XXXXXXXXXXXXXXXX" },
  });
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY >= 90);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (props.data) {
      setHeaderData(props.data);
    }
  }, [props.data]);

  return (
    <div
      className={`fixed top-0 left-0 w-full bg-${isScrolled ? "white" : "transparent"} transition-all duration-300 z-10`}
    >
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link to="/" className="flex items-center">
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
        <Link
          className={`flex items-center text-xs ${isScrolled ? "text-black" : "text-white"
            }`}
          to={`tel:${headerData.contactUs.phone}`}
        >
          <BsFillTelephoneFill className={`ml-2 text-[20px] rounded-full ${theme.colors.primary} p-2 h-9 w-9`} />
          <span className="ml-1 font-semibold">Call Now</span>
        </Link>
      </div>
    </div>
  );
}
