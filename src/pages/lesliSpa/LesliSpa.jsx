import React, { useEffect, useState } from "react";
import "./LesliSpa.scss";
import logolesli from "../../images/logolesli.png";
import spa from "../../images/spa.png";
import spa2 from "../../images/spa2.png";
import spa3 from "../../images/spa3.png";
import spa4 from "../../images/spa4.png";
import spa5 from "../../images/spa5.png";
import spa6 from "../../images/spa6.png";
import perfume from "../../images/perfume.png";
import piedras from "../../images/piedras.png";
import agua from "../../images/agua.png";
import agua2 from "../../images/agua2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faUser, faBars } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const LesliSpa = () => {
    const [scrollY, setScrollY] = useState(0);
    const [showTranquilidad, setShowTranquilidad] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [showPacifico, setShowPacifico] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    const navigate = useNavigate();

    const handleNavigateToTratamientos = () => navigate("/leslispa/tratamientos");
    const handleNavigateTotiendaleslispa = () => navigate("/leslispa/tiendaleslispa");

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        const handleScroll = () => {
            setScrollY(window.scrollY);
            if (window.scrollY > 300) setShowTranquilidad(true);
            if (window.scrollY > 700) setShowPacifico(true);
        };

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const handleScrollDown = () => {
        const tranquilidadSection = document.querySelector(".tranquilidad");
        if (tranquilidadSection) {
            tranquilidadSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="serenidad">
            <header className="serenidad-header">
                <div className="logo">
                    <div className="logo-circulo" />
                    <div className="titulos">
                        <div className="logo-text">SERENIDAD</div>
                        <div className="subtitle">Terapia Spa</div>
                    </div>
                </div>

                <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
                    <div>
                        <FontAwesomeIcon className="iconShop" icon={faBagShopping} />
                    </div>
                    <div className="iconBars">
                        <FontAwesomeIcon icon={faBars} />
                    </div>
                </div>

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

            <main className="serenidad-main" style={{ transform: `translateY(${scrollY * 0.3}px)` }}>
                <div className="background-overlay">
                    <div className="subir">
                        <h1>BIENVENIDOS A SERENIDAD</h1>
                        <div className="scroll-button-container">
                            <div className="arrow-down" onClick={handleScrollDown}>
                                V
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <section className={`tranquilidad ${showTranquilidad ? "visible" : ""}`}>
                <div className="tranquilidad-text">
                    <h2>TRANQUILIDAD</h2>
                    <p>
                        Párrafo. Haz clic aquí para agregar tu propio texto y editar. Aquí puedes contar tu historia
                        y permitir que tus usuarios sepan más sobre ti.
                    </p>
                    <div className="circle" onClick={handleNavigateToTratamientos}>Más información</div>
                    <div className="cosas">
                        <img src={piedras} alt="Nueva Imagen" className="tranquilidad-image" />
                    </div>
                </div>
                <div className="cosas2">
                    <img src={spa} alt="Masaje relajante" className="tranquilidad-image" />
                </div>
            </section>

            <section className={`pacifico ${showPacifico ? "visible" : ""}`}>
                <div className="pacifico-text">
                    <div className="uno">UN ENTORNO PACÍFICO</div>
                    <p>
                        Párrafo. Haz clic aquí para agregar tu propio texto y editar. Aquí puedes contar tu historia
                        y permitir que tus usuarios sepan más sobre ti.
                    </p>
                </div>
                <div className="pacifico-content">
                    <img
                        src={isMobile ? agua : spa2}
                        alt="Imagen 1"
                        className="pacifico-image"
                    />
                    <img
                        src={isMobile ? agua2 : spa3}
                        alt="Imagen 2"
                        className="pacifico-image"
                    />
                    <div className="circle-button">Reserva un tratamiento</div>
                </div>
            </section>

            <section className={`serenidadHome ${showTranquilidad ? "visible" : ""}`}>
                <div className="serenidadHome-text">
                    <h2>TEN SERENIDAD EN CASA</h2>
                    <p>
                        Párrafo. Haz clic aquí para agregar tu propio texto y editar. Aquí puedes contar tu historia
                        y permitir que tus usuarios sepan más sobre ti.
                    </p>
                    <div className="circle" onClick={handleNavigateTotiendaleslispa}>Tienda serenidad</div>
                    <div className="cosas">
                        <img src={spa4} alt="Nueva Imagen" className="serenidadHome-image" />
                    </div>
                </div>
                <div className="cosas2">
                    <img src={perfume} alt="Masaje relajante" className="serenidadHome-image2" />
                </div>
            </section>

            <div className="elcactus">
                <div className="elcactuspadding">
                    <div className="elcactusText">HORARIO LABORAL</div>
                    <div className="informacion">
                        <div className="lunesviernes">
                            <div className="dia">Lunes-Viernes</div>
                            <div className="hora">7:00-22:00</div>
                        </div>
                        <div>
                            <div className="dia">Sábado</div>
                            <div className="hora">8:00-22:00</div>
                        </div>
                        <div>
                            <div className="dia">Domingo</div>
                            <div className="hora">8:00-22:00</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="ubication">
                <div className="ubicationPadding">
                    <div className="ubicationText">
                        <div className="ubicationTitle">UBICACIÓN</div>
                        <div className="ubicationParrafo">
                            Av. Fray A. Alcalde 10, 44100, Guad., Jal., México
                        </div>
                    </div>
                    <div className="imagenesJuntas">
                        <img src={spa5} alt="Masaje relajante" className="serenidadHome-image2" />
                        <div className="imagenPrimera" />
                        <img src={spa6} alt="Masaje relajante" className="serenidadHome-image2" />
                        <div className="imagenSegunda" />
                    </div>
                </div>
            </div>

            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-logo">
                        <img src={logolesli} alt="Logo" className="footer-icon" />
                        <h2>SERENIDAD<br />TERAPIA SPA</h2>
                    </div>
                    <div className="footer-menu">
                        <h3>Menú</h3>
                        <ul>
                            <li>Acerca de</li>
                            <li>Instalaciones</li>
                            <li>Tratamientos</li>
                            <li>Tienda</li>
                            <li>Contacto</li>
                        </ul>
                    </div>
                    <div className="footer-social">
                        <h3>Síguenos</h3>
                        <ul>
                            <li>Facebook</li>
                            <li>Instagram</li>
                            <li>Yelp</li>
                            <li>TripAdvisor</li>
                        </ul>
                    </div>
                    <div className="footer-contact">
                        <h3>Reservas</h3>
                        <p>Mail: info@misitio.com</p>
                        <p>Tel: +52-1-33-12345678</p>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>© 2035 Creado por Serenidad Terapia Spa con <a href="https://wix.com">Wix.com</a></p>
                    <div className="footer-links">
                        <a href="#">Términos y condiciones</a>
                        <a href="#">Política de envío</a>
                        <a href="#">Política de privacidad</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default LesliSpa;
