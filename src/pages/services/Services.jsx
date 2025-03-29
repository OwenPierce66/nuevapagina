import React, { useRef, useState } from "react";
import "./Services.scss";
import CenterImage from "../../../general/images/image.png";

const Services = () => {
    const slides = Array.from({ length: 10 }, (_, i) => ({
        id: i + 1,
        title: `Producto ${i + 1}`,
        description: `Descripción del producto ${i + 1}`,
        image: CenterImage,
    }));

    const carouselRef = useRef(null);
    const [showButtons, setShowButtons] = useState(false);

    const scrollCarousel = (direction) => {
        const carousel = carouselRef.current;
        const cardWidth = carousel.children[0].offsetWidth + 20; // Anchura de la tarjeta + margen
        carousel.scrollBy({
            left: direction === "right" ? cardWidth : -cardWidth,
            behavior: "smooth",
        });
    };

    return (
        <div
            className="carousel-container"
            onMouseEnter={() => setShowButtons(true)}
            onMouseLeave={() => setShowButtons(false)}
        >
            <h2>
                <span>Lo último.</span> Regálales las estrellas.
            </h2>
            <div className="carousel-wrapper">
                {showButtons && (
                    <button
                        className="carousel-control prev"
                        onClick={() => scrollCarousel("left")}
                    >
                        &#8249;
                    </button>
                )}
                <div className="carousel" ref={carouselRef}>
                    {slides.map((slide) => (
                        <div key={slide.id} className="card">
                            <img src={slide.image} alt={slide.title} />
                            <h3>{slide.title}</h3>
                            <p>{slide.description}</p>
                        </div>
                    ))}
                </div>
                {showButtons && (
                    <button
                        className="carousel-control next"
                        onClick={() => scrollCarousel("right")}
                    >
                        &#8250;
                    </button>
                )}
            </div>
        </div>
    );
};

export default Services;
