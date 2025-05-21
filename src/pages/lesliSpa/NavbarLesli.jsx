import React, { useEffect, useState } from "react";
import "./NavbarLesli.scss";
// import logolesli from "../../images/logolesli.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faUser, faBars } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const NavbarLesli = ({ cartItemCount = 0 }) => {
    const [scrollY, setScrollY] = useState(0);
    const [showTranquilidad, setShowTranquilidad] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [showPacifico, setShowPacifico] = useState(false);
    const [showSerenidadHome, setShowSerenidadHome] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const navigate = useNavigate();


    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleNavigateToTratamientos = () => {
        navigate("/leslispa/tratamientos");
    };

    const handleNavigateTotiendaleslispa = () => {
        navigate("/leslispa/tiendaleslispa");
    };




    return (
        <div>
            <header className="serenidad-header">
                <div className="logo">
                    <div className="logo-circulo">
                        {/* <img src={logolesli} alt="Logo" className="footer-icon" /> */}
                    </div>
                    <div className="titulos">
                        <div className="logo-text-lesli">SERENIDAD</div>
                        <div className="subtitle">Terapia Spa</div>
                    </div>
                </div>

                <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
                    <div className="cart-icon">
                        <FontAwesomeIcon className="iconShop" icon={faBagShopping} />
                        <span className="cart-count">{cartItemCount}</span>
                    </div>
                    {isMobile && (
                        <div className="iconBars" onClick={() => setMenuOpen(!menuOpen)}>
                            <FontAwesomeIcon icon={faBars} />
                        </div>
                    )}

                    {isMobile && menuOpen && (
                        <nav className="menu-lesli-mobile">
                            <a href="/leslispa/acercade" onClick={() => setMenuOpen(false)}>Acerca de</a>
                            <a href="/leslispa/instalaciones" onClick={() => setMenuOpen(false)}>Instalaciones</a>
                            <a href="/leslispa/tratamientos" onClick={() => setMenuOpen(false)}>Tratamientos</a>
                            <a href="/leslispa/tienda" onClick={() => setMenuOpen(false)}>Tienda</a>
                            <a href="/leslispa/contacto" onClick={() => setMenuOpen(false)}>Contacto</a>
                        </nav>
                    )}
                </div>

                {/* Menú en móvil */}
                <nav className={`menu-lesli ${menuOpen ? "open" : ""}`}>
                    <a href="/leslispa/acercade">Acerca de</a>
                    <a href="/leslispa/instalaciones">Instalaciones</a>
                    <a href="/leslispa/tratamientos">Tratamientos</a>
                    <a href="/leslispa/tienda">Tienda</a>
                    <a href="/leslispa/contacto">Contacto</a>
                    <div className="user-icon">
                        <FontAwesomeIcon icon={faUser} /> Entrar
                    </div>
                    <div className="cart-icon">
                        <FontAwesomeIcon icon={faBagShopping} />
                        <span>0</span>
                    </div>
                </nav>
            </header>
        </div>

    );
};

export default NavbarLesli;
