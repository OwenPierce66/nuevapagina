import React, { useEffect, useState } from "react";
import "./NavbarLesli.scss"; // Importa los estilos SCSS
import logolesli from "../../images/logolesli.png"; // Imagen principal de fondo
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faUser, faBars } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const NavbarLesli = () => {
    const [scrollY, setScrollY] = useState(0);
    const [showTranquilidad, setShowTranquilidad] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [showPacifico, setShowPacifico] = useState(false);
    const [showSerenidadHome, setShowSerenidadHome] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const navigate = useNavigate();


    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); // Teléfono: 768px o menos
        };

        window.addEventListener("resize", handleResize);
        handleResize(); // Ejecutar al cargar

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

                {/* Ícono menú hamburguesa */}
                <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
                    <div>
                        <FontAwesomeIcon className="iconShop" icon={faBagShopping} />
                    </div>
                    <div className="iconBars">
                        <FontAwesomeIcon icon={faBars} />
                    </div>
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
