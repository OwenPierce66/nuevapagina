import React from "react";
import "./otrohellsvanity.scss";
import CenterImage from "../../images/image.png";
import hv from "../../images/hv.png";
import tatu3 from "../../images/tatu3.jpg";
import tatu2 from "../../images/tatu2.jpg";
import tatu from "../../images/tatu.jpg";
import tatu4 from "../../images/tatu4.jpg";

const OtroHellsVanity = () => {
    return (
        <div className="hells-vanity">
            {/* Header */}
            <header className="header">
                <div className="logo">
                    <img src={hv} alt="Hells Vanity Logo" />
                    <span>Hells Vanity</span>
                </div>
                {/* <nav className="nav">
          <a href="#inicio">Inicio</a>
          <a href="#blog">Blog</a>
          <a href="#reserva-online">Reserva online</a>
          <a href="#portafolio">Portafolio</a>
        </nav> */}
                <div className="search">
                    <span>Search</span>
                    <span className="search-icon">🔍</span>
                </div>
            </header>

            {/* Main Section */}
            <main className="main-content">
                <div className="intro">
                    <p className="subtitle">Bienvenido a nuestro mundo</p>
                    <h1 className="title">Explora Nuestros Diseños</h1>
                </div>

                {/* Positioned Images */}
                <div className="image-layout">
                    <div className="image-left">
                        <img src={tatu3} alt="Left Tattoo Design" />
                    </div>
                    <div className="image-right">
                        <img src={tatu2} alt="Right Tattoo Design" />
                    </div>
                    <div className="image-bottom">
                        <img src={tatu} alt="Bottom Tattoo Design" />
                    </div>
                </div>
            </main>

            {/* Blog Section */}
            <section className="blog-section">
                <h2 className="blog-title">Blog</h2>
                <div className="blog-cards">
                    <div className="blog-card">
                        <img src={CenterImage} alt="Blog 1" className="blog-image" />
                        <div className="blog-content">
                            <h3>Ahora puedes bloguear estés donde estés...</h3>
                            <p>Logramos que resulte más rápido y práctico administrar tu blog desde cualquier lugar...</p>
                            <div className="blog-meta">
                                <span className="views">26</span>
                                <span className="likes">❤</span>
                            </div>
                        </div>
                    </div>
                    <div className="blog-card">
                        <img src={tatu4} alt="Blog 2" className="blog-image" />
                        <div className="blog-content">
                            <h3>Haz crecer tu comunidad</h3>
                            <p>Con Wix Blog, no solo compartes tu voz con el mundo, sino que también puedes cultivar...</p>
                            <div className="blog-meta">
                                <span className="views">21</span>
                                <span className="likes">❤</span>
                            </div>
                        </div>
                    </div>
                    <div className="blog-card">
                        <img src={tatu4} alt="Blog 3" className="blog-image" />
                        <div className="blog-content">
                            <h3>Diseña un blog atractivo</h3>
                            <p>Cuando se trata de diseño, Wix Blog tiene todo lo que necesitas para crear entradas magníficas...</p>
                            <div className="blog-meta">
                                <span className="views">7</span>
                                <span className="likes">❤</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="services-section">
                <h2 className="services-title">Servicios</h2>
                <div className="services">
                    <div className="service-item">
                        <p>Diseño de tatuajes personalizados</p>
                        <span className="price">$300</span>
                        <button className="reserve-button">Reservar ahora</button>
                    </div>
                    <hr />
                    <div className="service-item">
                        <p>Perforaciones o "piercings" barbell</p>
                        <span className="price">$150</span>
                        <button className="reserve-button">Reservar ahora</button>
                    </div>
                </div>
            </section>

            <section className="tattoos-section">
                <div className="tattoos-container">
                    <div className="tattoo-item">
                        <img src={tatu4} alt="Tattoo 1" className="tattoo-image" />
                        <div className="tattoo-content">
                            <h3>Tatuaje Personalizado</h3>
                            <p>
                                Crea un diseño único que represente tu estilo y personalidad. Nuestros artistas trabajarán contigo para
                                plasmar tu idea en un tatuaje significativo y especial que llevarás para siempre.
                            </p>
                        </div>
                    </div>
                    <div className="tattoo-item">
                        <div className="tattoo-content">
                            <h3>Tatuaje Realista</h3>
                            <p>
                                Nuestros artistas expertos capturarán la esencia y la emoción en cada trazo, creando obras de arte que
                                impresionarán.
                            </p>
                        </div>
                        <img src={CenterImage} alt="Tattoo 2" className="tattoo-image" />
                    </div>
                    <div className="tattoo-item">
                        <img src={CenterImage} alt="Tattoo 3" className="tattoo-image" />
                        <div className="tattoo-content">
                            <h3>Tatuaje de Acuarela</h3>
                            <p>
                                Experimenta la fusión de tonos y formas en diseños únicos que reflejarán tu estilo y personalidad.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="tattoos-button-container">
                    <button className="view-more-button">Ver Más</button>
                </div>
            </section>

            <footer className="footer-section">
                <div className="footer-top">
                    <div className="footer-logo">
                        <h2>Hells Vanity</h2>
                    </div>
                    <div className="footer-contact">
                        <p>52-1-33-12345678</p>
                        <p>info@sitio.com</p>
                    </div>
                    <div className="footer-address">
                        <p>Centro, Nuevo Casas Grandes,</p>
                        <p>Chih., México</p>
                    </div>
                </div>
                <hr />
                <div className="footer-subscribe">
                    <h3>Suscríbete a Nuestro Boletín</h3>
                    <div className="subscribe-form">
                        <input
                            type="email"
                            placeholder="Ingresa Tu Correo *"
                            aria-label="Correo Electrónico"
                        />
                        <button className="subscribe-button">Únete</button>
                    </div>
                    <p className="footer-note">Contáctanos</p>
                </div>
            </footer>


        </div>
    );
};

export default OtroHellsVanity;
