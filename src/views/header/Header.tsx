import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../themes/ThemeProvider";
import { MenuItem } from "../../modal/Section";
import { useScrollPosition, useToggle } from "../../hooks";

interface HeaderProps {
    data: any;
    style?: "MODERN" | "CLASSIC";
}

const Header: React.FC<HeaderProps> = ({ data, style = "MODERN" }) => {
    const { theme } = useContext(ThemeContext);
    const [headerData, setHeaderData] = useState<any>({
        title: "",
        menu: [],
    });
    const isScrolled = useScrollPosition(20);
    const [isMenuOpen, toggleMenu] = useToggle(false);

    useEffect(() => {
        if (data) {
            setHeaderData(data);
        }
    }, [data]);

    const isModern = style === "MODERN";

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled
                ? "py-3 glass shadow-premium"
                : "py-6 bg-transparent"
                }`}
        >
            <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
                {/* Logo Section */}
                <a href="/" className="group flex items-center gap-3 transition-transform duration-300 hover:scale-105">
                    {headerData.logo ? (
                        <div className="relative">
                            <img
                                className={`w-12 h-12 object-contain rounded-xl transition-all duration-300 ${isScrolled ? "scale-90" : "scale-100"
                                    }`}
                                src={headerData.logo.imageSrc}
                                alt={headerData.logo.imageAlt}
                            />
                            <div className="absolute -inset-1 bg-primary-500/20 blur rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                    ) : (
                        <span className={`text-2xl font-display font-bold tracking-tight transition-colors duration-300 ${isScrolled || !isModern ? "text-slate-900" : "text-white"
                            }`}>
                            {headerData.title || ""}
                        </span>
                    )}
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {headerData.menu?.map((item: MenuItem) => (
                        <a
                            key={item.id}
                            href={item.url}
                            className={`nav-link-hover text-sm font-semibold transition-colors duration-300 ${isScrolled || !isModern
                                ? "text-slate-600 hover:text-primary-600"
                                : "text-white/90 hover:text-white"
                                }`}
                        >
                            {item.label}
                        </a>
                    ))}
                    {headerData.ctaLabel && (
                        <a href={headerData.ctaUrl || "/contact"}>
                            <button className="btn-premium py-2 px-6 text-sm">
                                {headerData.ctaLabel}
                            </button>
                        </a>
                    )}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    onClick={toggleMenu}
                    className={`md:hidden p-2 rounded-lg transition-colors ${isScrolled || !isModern ? "text-slate-900 hover:bg-slate-100" : "text-white hover:bg-white/10"
                        }`}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                        />
                    </svg>
                </button>
            </div>

            {/* Mobile Navigation */}
            <div className={`md:hidden absolute top-full left-0 w-full glass-dark overflow-hidden transition-all duration-500 ${isMenuOpen ? "max-h-96 border-b border-white/10 shadow-2xl" : "max-h-0"
                }`}>
                <div className="p-6 flex flex-col gap-4">
                    {headerData.menu?.map((item: MenuItem) => (
                        <a
                            key={item.id}
                            href={item.url}
                            className="text-white/80 hover:text-white text-lg font-medium py-2 border-b border-white/5"
                        >
                            {item.label}
                        </a>
                    ))}
                    {headerData.ctaLabel && (
                        <button className="btn-premium w-full mt-2">
                            {headerData.ctaLabel}
                        </button>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;

