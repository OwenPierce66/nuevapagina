import React, { useState, useEffect } from 'react';
import "./Contacto.scss";
import contactoImg from '../../images/recepcion.png';
import imagencompleta from '../../images/imagencompleta.png';
import combined_image from '../../images/combined_image.png';
import segundaalberca from '../../images/segundaalberca.png';
import cactus2 from '../../images/cactus2.png';
import PiePaginaLesli from './PiePaginaLesli';
import NavbarLesli from './NavbarLesli';

const Contacto = () => {
    const [isMobile, setIsMobile] = useState(false);

    // Efecto para detectar el tamaño de la pantalla
    useEffect(() => {
        const handleResize = () => {
            // Define el breakpoint móvil (ej: 768px)
            setIsMobile(window.innerWidth <= 768);
        };

        // Llama la función al montar el componente para establecer el estado inicial
        handleResize();

        // Agrega el event listener para el cambio de tamaño
        window.addEventListener('resize', handleResize);

        // Limpia el event listener al desmontar el componente
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); // El array vacío asegura que el efecto solo se ejecute una vez al montar

    return (
        <div className="contacto-container">
            <div><NavbarLesli /></div>
            <section className="contacto-intro">
                <h2>CONTÁCTANOS</h2>
                <div className='minimizar'>
                    <p>
                        Párrafo. Haz clic para editar y agregar tu propio texto. Es fácil. Haz clic en "Editar texto" o doble clic aquí para
                        agregar tu contenido y cambiar la fuente. Puedes arrastrar y soltar este texto donde quieras en tu página. En este
                        espacio puedes contar tu historia y permitir que los usuarios sepan más sobre ti.
                    </p>
                    <p>
                        Este es un gran espacio para escribir un texto largo sobre tu empresa y servicios. Puedes usar este espacio para
                        entrar en más detalle sobre tu empresa. Habla de tu equipo y los servicios que ofreces. Cuenta a los visitantes
                        la historia de cómo se te ocurrió la idea de tu negocio y qué te diferencia de tus competidores.
                    </p>
                </div>
            </section>

            <div className='dividir'>
                {/* Renderizado condicional de la imagen principal */}
                {isMobile && (
                    <div className="imagen-contacto mobile-only"> {/* Agrega una clase para estilos específicos si es necesario */}
                        <img src={combined_image} alt="Contacto" />
                    </div>
                )}

                <div className="formulario">
                    <h2 className="titulo-contacto">Contactanos en el siguiente formulario </h2>
                    <form>
                        <label htmlFor="nombre">Nombre *</label>
                        <input type="text" id="nombre" placeholder="" />

                        <label htmlFor="apellido">Apellido *</label>
                        <input type="text" id="apellido" placeholder="" />

                        <label htmlFor="email">Email *</label>
                        <input type="email" id="email" placeholder="" />

                        <label htmlFor="asunto">Asunto</label>
                        <input type="text" id="asunto" placeholder="" />

                        <label htmlFor="mensaje">Déjanos un mensaje...</label>
                        <textarea id="mensaje" placeholder=""></textarea>

                        <button type="submit">Enviar</button>

                        <div className='imagen-contacto-abajo'>
                            <img src={segundaalberca} alt="Contacto-abajo" />
                        </div>
                    </form>
                </div>

                {/* Renderizado condicional de la imagen principal para desktop */}
                {!isMobile && (
                    <div className="imagen-contacto desktop-only"> {/* Agrega una clase para estilos específicos si es necesario */}
                        <img src={combined_image} alt="Contacto" />
                    </div>
                )}
            </div>

            {/* INICIO: Nueva Sección de Diseño */}
            <section className="new-design-section">
                <h2 className="new-design-header">RELAJA REFRESCA. REVIVE.</h2>
                <div className="new-design-layout">
                    <div className="new-design-image-container">
                        <img src={cactus2} alt="Relax Refresh Revive" className="new-design-image" />
                    </div>
                    <div className="new-design-data-container">
                        <h3 className="new-design-data-title">Datos</h3>
                        <ul className="new-design-data-list">
                            <li className="new-design-data-item">
                                <div className="new-design-data-label">Teléfono</div>
                                <div className="cosas">
                                    +52-33-12345678
                                </div>
                            </li>
                            <li className="new-design-data-item">
                                <div className="new-design-data-label">Email</div>
                                <div className="cosas">
                                    info@email.com {/* Reemplaza con el email correcto */}
                                </div>
                            </li>
                            <li className="new-design-data-item">
                                <div className="new-design-data-label">Dirección</div>
                                <div className='cosas'>
                                    Av. Fray A. Alcalde 10,<br /> 44100 Guadalajara, Jal., México
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            {/* FIN: Nueva Sección de Diseño */}

            <div className="mapa">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3440.745382886696!2d-107.91359692471076!3d30.414965100921094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86dcad005d0a8137%3A0xa8831e6fd904f27b!2sHells%20Vanity%20(Tattoos%2C%20Sex%20Shop%2C%20Smoke%20Shop%20and%20Lashes)!5e0!3m2!1ses-419!2smx!4v1745569416312!5m2!1ses-419!2smx" // Asegúrate de que esta URL funcione o usa la URL de Google Maps correcta
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
            <div><PiePaginaLesli /></div>
        </div>
    );
};

export default Contacto;