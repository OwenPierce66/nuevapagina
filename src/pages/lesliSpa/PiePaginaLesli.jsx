import React from "react";
import "./PiePaginaLesli.scss"; // Importa los estilos SCSS
import logolesli from "../../images/logolesli.png"; // Imagen principal de fondo

const PiePaginaLesli = () => {



    return (

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
                <p>© 2035 Creado por Serenidad Terapia Spa con <a href="https://hellsvanity.com">HellsVanity.com</a></p>
                <div className="footer-links">
                    <a href="#">Términos y condiciones</a>
                    <a href="#">Política de envío</a>
                    <a href="#">Política de privacidad</a>
                </div>
            </div>
        </footer>



    );
};

export default PiePaginaLesli;
