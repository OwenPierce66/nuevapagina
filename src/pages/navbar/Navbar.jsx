import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
    const [activeMenu, setActiveMenu] = useState(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null); // Para manejar submenús en móvil

    const menuItems = [
        { name: "Home", route: "/home" },
        {
            name: "Tienda",
            route: "/vanity-home",
            options: [
                { name: "Ver lo último", route: "/vanity-home/latest" },
                { name: "Mac", route: "/vanity-home/mac" },
                { name: "iPad", route: "/vanity-home/ipad" },
                { name: "iPhone", route: "/vanity-home/iphone" },
                { name: "Apple Watch", route: "/vanity-home/watch" },
                { name: "Accesorios", route: "/vanity-home/accessories" },
            ],
        },
        {
            name: "Services",
            route: "/services",
            options: [
                { name: "MacBook Air", route: "/services/macbook-air" },
                { name: "MacBook Pro", route: "/services/macbook-pro" },
                { name: "Mac Mini", route: "/services/mac-mini" },
                { name: "iMac", route: "/services/imac" },
                { name: "Mac Studio", route: "/services/mac-studio" },
            ],
        },
        { name: "Testing", route: "/testing" },
        { name: "HellsVanity", route: "/hellsvanity" },
        { name: "OtroHellsVanity", route: "/otrohellsvanity" },
        { name: "LesliSpa", route: "/leslispa" },
    ];

    return (
        <nav className="navbar-container">
            {/* Botón de menú móvil */}
            <div className="mobile-menu-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                ☰
            </div>

            {/* Menú principal */}
            <div className={`navbar ${isMobileMenuOpen ? "open" : ""}`}>
                {menuItems.map((item, index) => (
                    <div
                        key={index}
                        className="navbar-item"
                        onMouseEnter={() => !isMobileMenuOpen && setActiveMenu(item.name)}
                        onMouseLeave={() => !isMobileMenuOpen && setActiveMenu(null)}
                    >
                        <div className="navbar-link-container">
                            <Link to={item.route} className="navbar-link" onClick={() => setIsMobileMenuOpen(false)}>
                                {item.name}
                            </Link>

                            {/* Flecha para desplegar en móvil */}
                            {item.options && (
                                <span
                                    className={`dropdown-arrow ${openDropdown === item.name ? "open" : ""}`}
                                    onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                                >
                                    ▼
                                </span>
                            )}
                        </div>

                        {/* Submenú */}
                        <div className={`dropdown ${activeMenu === item.name || openDropdown === item.name ? "show" : ""}`}>
                            {item.options &&
                                item.options.map((option, idx) => (
                                    <Link
                                        key={idx}
                                        to={option.route}
                                        className="dropdown-item"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {option.name}
                                    </Link>
                                ))}
                        </div>
                    </div>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;
