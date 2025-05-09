import React, { useState, useEffect } from 'react';

import "./AcercaDe.scss";
import piscina from '../../images/piscina.png'; // Asegúrate de que la ruta sea correcta
// Asegúrate de tener estas imágenes en la ruta correcta o ajústala según sea necesario
// Voy a usar 'image_b8e6ac.jpg' como referencia para la imagen principal
import masajecuello from '../../images/masajecuello.png';
import sal from '../../images/sal.png';
import piscina3 from '../../images/piscina3.png';
import NavbarLesli from './NavbarLesli';
import PiePaginaLesli from './PiePaginaLesli';

const AcercaDe = () => {


    const testimonials = [
        {
            text: "“Testimonio 1. Haz clic aqui para editar y agrega texto que diga algo bueno sobre ti y tus servicios.”",
            author: "Betty Boop", // Ejemplo, reemplaza con el nombre real
        },
        {
            text: "“¡Una experiencia increíble! Me sentí totalmente renovada. Recomiendo este lugar al 100%.”",
            author: "Cliente Satisfecho A.",
        },
        {
            text: "“El servicio fue excepcional y el ambiente súper relajante. Definitivamente volveré pronto.”",
            author: "Visitante Feliz B.",
        },
    ];

    const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
    const [isSliding, setIsSliding] = useState(false);

    // ... (funciones animatedNextTestimonial, nextTestimonial, prevTestimonial, goToTestimonial y useEffect para auto-slide) ...
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTestimonialIndex((prevIndex) =>
                prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);

        return () => clearInterval(interval);
    }, []);
    // Función para ir al siguiente testimonio
    const nextTestimonial = () => {
        setCurrentTestimonialIndex((prevIndex) =>
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTestimonialIndex((prevIndex) =>
                prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    // Función para ir al testimonio anterior
    const prevTestimonial = () => {
        setCurrentTestimonialIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    // Función para ir a un testimonio específico (para los puntos de navegación)
    const goToTestimonial = (index) => {
        setCurrentTestimonialIndex(index);
    };

    // Efecto para el cambio automático (Opcional: Descomenta si quieres que cambie solo)
    /*
    useEffect(() => {
        const interval = setInterval(() => {
            nextTestimonial();
        }, 5000); // Cambia cada 5 segundos (5000 ms)
    
        return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
    }, [currentTestimonialIndex]); // El efecto se re-ejecuta cuando cambia el índice
    */

    return (
        <div className="acerca-de-container">
            <div><NavbarLesli /></div>
            <div className='centrar'>
                <section className="acerca-de-intro">
                    {/* Puedes ajustar este título si el de la imagen de referencia es diferente */}
                    <h2>ACERCA DEL SPA</h2>
                </section>

                <div className="acerca-de-content-layout">
                    {/* Contenedor de la imagen */}
                    <div className="acerca-de-image">
                        <img src={masajecuello} alt="Imagen Acerca De" />
                    </div>

                    {/* Contenedor del texto y el círculo */}
                    <div className="acerca-de-text-content">
                        {/* Aquí va el texto que adapta los párrafos de tu referencia */}
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
                        {/* El elemento circular - lo crearemos con CSS */}
                        <div className="acerca-de-circle">
                            <p>Reserva un tratamiento</p>
                        </div>

                        {/* Si quieres incluir la sección de datos de contacto como en el Contacto, puedes adaptarla aquí.
                        Por ahora, basándome en la imagen de referencia, no está presente.
                    */}
                    </div>
                </div>
            </div>

            {/* Nuevo div para la imagen de fondo sticky */}
            <div className="sticky-wrapper">
                <div className="sticky-element">
                    {/* Esta imagen se mostrará solo en mobile via CSS */}
                    <img src={piscina3} alt="Imagen de Spa - Mobile" className="sticky-mobile-image" />
                </div>
            </div>
            {/* Fin del nuevo div */}
            {/* Si quieres un mapa en la sección Acerca De, puedes dejar este div
                <div className="mapa">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3440.745382886696!2d-107.91359692471076!3d30.414965100921094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86dcad005d0a8137%3A0xa8831e6fd904f27b!2sHells%20Vanity%20(Tattoos%2C%20Sex%20Shop%2C%20Smoke%20Shop%20and%20Lashes)!5e0!3m2!1ses-419!2smx!4v1745569416312!5m2!1ses-419!2smx" // Considera usar una URL de mapa más específica si tienes una ubicación fija
                        width="100%"
                        height="400"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            */}
            <div className="testimonios-container">
                <h2 className="testimonios-title">TESTIMONIOS</h2>

                <div className="testimonios-layout">
                    {/* Sección del Carrusel de Testimonios */}
                    <div className="testimonios-carousel">
                        <div className='cosas'>
                            {/* Flecha de navegación izquierda */}
                            <div className="carousel-arrow left-arrow" onClick={prevTestimonial}>
                                &lt; {/* Entidad HTML para la flecha izquierda */}
                            </div>

                            {/* Contenido del Testimonio Actual */}
                            <div className="testimonial-slider">
                                <div
                                    className="testimonial-track"
                                    style={{ transform: `translateX(-${currentTestimonialIndex * 100}%)` }}
                                >
                                    {testimonials.map((testimonial, index) => (
                                        <div className="testimonial-slide" key={index}>
                                            <p className="testimonial-text">{testimonial.text}</p>
                                            <p className="testimonial-author">{testimonial.author}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>


                            {/* Flecha de navegación derecha */}
                            <div className="carousel-arrow right-arrow" onClick={nextTestimonial}>
                                &gt; {/* Entidad HTML para la flecha derecha */}
                            </div>

                            {/* Puntos de Navegación */}
                            <div className="carousel-pagination">
                                {testimonials.map((_, index) => (
                                    <span
                                        key={index}
                                        className={`pagination-dot ${index === currentTestimonialIndex ? 'active' : ''}`}
                                        onClick={() => goToTestimonial(index)}
                                    ></span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sección de la Imagen */}
                    <div className="testimonios-image">
                        <img src={sal} alt="Imagen de Spa" />
                    </div>
                </div>
            </div>
            <div>
                <PiePaginaLesli />
            </div>
        </div>
    );
};

export default AcercaDe;