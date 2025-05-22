import React, { useEffect, useState } from "react";
import "./NavbarLesli.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faUser, faBars } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useLocation, Link } from "react-router-dom";

const NavbarLesli = ({ cartItemCount = 0, setIsCartOpen }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Rutas del menú
    const menuLinks = [
        { to: "/leslispa/acercade", label: "Acerca de" },
        { to: "/leslispa/instalaciones", label: "Instalaciones" },
        { to: "/leslispa/tratamientos", label: "Tratamientos" },
        { to: "/leslispa/tienda", label: "Tienda" },
        { to: "/leslispa/contacto", label: "Contacto" },
    ];

    return (
        <div>
            <header className="serenidad-header">
                <div
                    className="logo"
                    style={{ cursor: "pointer" }}
                    onClick={() => navigate("/leslispa")}
                >
                    <div className="logo-circulo">{/* logo */}</div>
                    <div className="titulos">
                        <div className="logo-text-lesli">SERENIDAD</div>
                        <div className="subtitle">Terapia Spa</div>
                    </div>
                </div>

                <div className="menu-icon">
                    <div
                        className="cart-icon"
                        onClick={() => setIsCartOpen && setIsCartOpen(true)}
                        style={{ cursor: "pointer" }}
                    >
                        <FontAwesomeIcon className="iconShop" icon={faBagShopping} />
                        <span className="cart-count">{cartItemCount}</span>
                    </div>
                    <div onClick={() => setMenuOpen(!menuOpen)}>
                        {isMobile && (
                            <div className="iconBars" onClick={() => setMenuOpen(!menuOpen)}>
                                <FontAwesomeIcon icon={faBars} />
                            </div>
                        )}

                        {isMobile && menuOpen && (
                            <nav className="menu-lesli-mobile">
                                {menuLinks.map(link => (
                                    <Link
                                        key={link.to}
                                        to={link.to}
                                        onClick={() => setMenuOpen(false)}
                                        className={location.pathname === link.to ? "active-link" : ""}
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </nav>
                        )}
                    </div>
                </div>

                {/* Menú en escritorio */}
                <nav className={`menu-lesli ${menuOpen ? "open" : ""}`}>
                    {menuLinks.map(link => (
                        <Link
                            key={link.to}
                            to={link.to}
                            onClick={() => setMenuOpen(false)}
                            className={location.pathname === link.to ? "active-link" : ""}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <div className="user-icon">
                        <FontAwesomeIcon icon={faUser} /> Entrar
                    </div>
                    <div className="cart-icon" onClick={() => setIsCartOpen && setIsCartOpen(true)} style={{ cursor: "pointer" }}>
                        <FontAwesomeIcon icon={faBagShopping} />
                        <span className="cart-count">{cartItemCount}</span>
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default NavbarLesli;