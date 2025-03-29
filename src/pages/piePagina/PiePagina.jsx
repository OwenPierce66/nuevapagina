import React from "react";
import CenterImage from "../../../general/images/image.png";
import "./piepagina.scss";
const VanityHome = () => {
    return (
        <div className="design-container">
            {/* Header */}
            {/* <header className="header">
                <h1>Hells Vanity</h1>
                <nav className="nav">
                    <a href="#home">Inicio</a>
                    <a href="#blog">Blog</a>
                    <a href="#booking">Reserva Online</a>
                    <a href="#portfolio">Portafolio</a>
                </nav>
            </header> */}

            {/* Main Section */}
            <main className="main-content">
                {/* <section className="intro-section">
                    <h2>Explora Nuestros Diseños</h2>
                    <div className="images">
                        <img src={CenterImage} alt="Tattoo Design 1" className="image-item" />
                        <img src={CenterImage} alt="Tattoo Design 2" className="image-item" />
                        <img src={CenterImage} alt="Tattoo Design 3" className="image-item" />
                    </div>
                </section> */}

                {/* Blog Section */}
                <section className="blog-section">
                    {/* <h2>Blog</h2> */}
                    <div className="blog-cards">
                        <div className="blog-card">
                            <img src={CenterImage} alt="Blog Image 1" />
                            <h3>Ahora puedes bloguear estés...</h3>
                            <p>Logramos que resulte más rápido y práctico administrar tu blog desde cualquier lugar...</p>
                        </div>
                        <div className="blog-card">
                            <img src={CenterImage} alt="Blog Image 2" />
                            <h3>Haz crecer tu comunidad</h3>
                            <p>Con Wix Blog, no solo compartes tu voz con el mundo, sino que también puedes cultivar...</p>
                        </div>
                        <div className="blog-card">
                            <img src={CenterImage} alt="Blog Image 3" />
                            <h3>Diseña un blog atractivo</h3>
                            <p>Cuando se trata de diseño, Wix Blog tiene todo lo que necesitas para crear entradas...</p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default VanityHome;
