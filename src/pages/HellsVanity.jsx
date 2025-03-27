import React from "react";
import "./HellsVanity.scss";
import CenterImage from "../images/tatu4.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars, faHeart, faEye } from "@fortawesome/free-solid-svg-icons";
import hv from "../images/hv.png";
const HellsVanity = () => {
    return (
        <div className="hells-page">
            {/* Hero Section */}
            <div className="hero-section">

                <div className="left-section">
                    <div className="logo">
                        <img src={hv} alt="HV Logo" className="logo-image" />
                    </div>
                    <div className="separar-letras">
                        <h1 className="welcome-title">
                            Bienvenidos
                            <span className="line-break-mobile">a</span>
                            Hells Vanity
                        </h1>

                        <p className="subtitle">Expertos en Arte Corporal</p>
                        <button className="explore-button">Explora</button>
                    </div></div>
                <div className="right-section">
                    <img src={CenterImage} alt="Tattoo" className="tattoo-image" />
                    <div className="menu">
                        <button className="search-button">
                            <FontAwesomeIcon icon={faSearch} className="icon" />
                            Search
                        </button>
                        <button className="menu-button">
                            <FontAwesomeIcon icon={faBars} className="icon" />
                            MENU
                        </button>
                    </div>
                </div>
            </div>

            {/* Blog Section */}
            <section className="blog-section">
                <h2 className="blog-title">Blog</h2>
                <div className="blog-cards">
                    <div className="blog-card">
                        <img src={CenterImage} alt="Blog 1" className="blog-image" />
                        <div className="blog-content">
                            <p className="author">Owen Pierce</p>
                            <h3 className="blog-heading">Ahora puedes bloguear...</h3>
                            <p className="blog-description">
                                Logramos que resulte más rápido y práctico administrar tu blog desde cualquier lugar...
                            </p>
                            <div className="blog-meta">
                                <span className="views">
                                    <FontAwesomeIcon icon={faEye} /> 26
                                </span>
                                <span className="likes">
                                    <FontAwesomeIcon icon={faHeart} />
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="blog-card">
                        <img src={CenterImage} alt="Blog 2" className="blog-image" />
                        <div className="blog-content">
                            <p className="author">Owen Pierce</p>
                            <h3 className="blog-heading">Haz crecer tu comunidad</h3>
                            <p className="blog-description">
                                Con Wix Blog, no solo compartes tu voz con el mundo, sino que también puedes cultivar...
                            </p>
                            <div className="blog-meta">
                                <span className="views">
                                    <FontAwesomeIcon icon={faEye} /> 21
                                </span>
                                <span className="likes">
                                    <FontAwesomeIcon icon={faHeart} />
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="blog-card">
                        <img src={CenterImage} alt="Blog 3" className="blog-image" />
                        <div className="blog-content">
                            <p className="author">Owen Pierce</p>
                            <h3 className="blog-heading">Diseña un blog atractivo</h3>
                            <p className="blog-description">
                                Cuando se trata de diseño, Wix Blog tiene todo lo que necesitas para crear entradas...
                            </p>
                            <div className="blog-meta">
                                <span className="views">
                                    <FontAwesomeIcon icon={faEye} /> 7
                                </span>
                                <span className="likes">
                                    <FontAwesomeIcon icon={faHeart} />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="hells-page">
                <section className="services-section">
                    <h2 className="services-title">Servicios</h2>
                    <div className="services-container">
                        <div className="service-card">
                            <h3 className="service-name">Nombre del servicio</h3>
                            <div className="border"></div>
                            <span className="service-price">USD 80</span>
                            <a
                                href="https://wa.me/6361316979?text=Hola%20quiero%20reservar%20el%20servicio%20de%20Nombre%20del%20servicio"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="reserve-button"
                            >
                                Reservar ahora
                            </a>                        </div>
                        <div className="service-card">
                            <h3 className="service-name">Nombre del servicio</h3>
                            <div className="border"></div>
                            <span className="service-price">USD 60</span>
                            <a
                                href="https://wa.me/6361316979?text=Hola%20quiero%20reservar%20el%20servicio%20de%20Nombre%20del%20servicio"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="reserve-button"
                            >
                                Reservar ahora
                            </a>                        </div>
                        <div className="service-card">
                            <h3 className="service-name">Nombre del servicio</h3>
                            <div className="border"></div>
                            <span className="service-price">USD 35</span>
                            <a
                                href="https://wa.me/6361316979?text=Hola%20quiero%20reservar%20el%20servicio%20de%20Nombre%20del%20servicio"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="reserve-button"
                            >
                                Reservar ahora
                            </a>
                        </div>
                    </div>
                </section>
            </div>

            <div className="tattoo-services">
                <section className="services-section">
                    <div className="services-title">Servicios de Tatuajes</div>
                    <p className="services-subtitle">Expresión a Través de la Tinta</p>
                    <div className="services-container">
                        <div className="service-card">
                            <h3 className="service-heading">Tatuajes</h3>
                            <p className="service-subheading">Diseños Únicos</p>
                            <p className="service-description">
                                Nuestros artistas expertos en tatuajes crean diseños únicos y personalizados que reflejan tu estilo y
                                personalidad. Desde tatuajes clásicos hasta colores intensos como negro, rojo, gris y blanco, estamos aquí
                                para plasmar tu visión en una obra de arte duradera.
                            </p>
                        </div>
                        <div className="service-card">
                            <h3 className="service-heading">Piercings</h3>
                            <p className="service-subheading">Piercings Profesionales</p>
                            <p className="service-description">
                                Ofrecemos una amplia gama de opciones de piercings con un enfoque profesional y estético. Desde piercings
                                faciales hasta corporales, nuestra atención meticulosa y enfoque en la seguridad garantizan una experiencia
                                cómoda y segura para nuestros clientes.
                            </p>
                        </div>
                        <div className="service-card">
                            <h3 className="service-heading">Rejuvenecimiento de Tatuajes</h3>
                            <p className="service-subheading">Renueva tu Arte Corporal</p>
                            <p className="service-description">
                                ¿Tienes un tatuaje antiguo que necesita un nuevo aspecto? Nuestros artistas expertos pueden ayudarte a
                                rejuvenecer y mejorar tus tatuajes antiguos, dándoles nueva vida y brillo para que luzcan como el primer día.
                            </p>
                        </div>
                    </div>
                </section>
            </div>


            <div className="footer">
                <div className="footer-container">
                    <div className="footer-logo">
                        <h2>Hells Vanity</h2>
                    </div>
                    <div className="footer-columns">
                        <div className="footer-column">
                            <p>52-1-33-12345678</p>
                            <p>info@sitio.com</p>
                        </div>
                        <div className="footer-column">
                            <p>Nuevo Casas Grandes,</p>
                            <p>Chih., México</p>
                        </div>
                        <div className="footer-column">
                            <p>© 2024 Hells Vanity</p>
                            <p>Todos los derechos reservados</p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default HellsVanity;
