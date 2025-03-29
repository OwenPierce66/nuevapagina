import React from 'react';
import './LesliSpa.scss';
import leslispa from "../../images/leslispa.png";

const LesliSpa = () => {
    return (
        <div className="background-container">
            <header className="header">
                <div className="logo">
                    <img src="/path-to-logo.png" alt="Logo Serenidad" />
                    <span>Serenidad</span>
                    <p>Terapia Spa</p>
                </div>
                <nav className="menu">
                    <ul>
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Servicios</a></li>
                        <li><a href="#">Contacto</a></li>
                    </ul>
                    <div className="cart-icon">
                        <img src="/path-to-cart-icon.png" alt="Carrito" />
                        <span>0</span>
                    </div>
                </nav>
            </header>
            <div className="content">
                <div className="scroll-indicator">
                    <img src="/path-to-scroll-indicator.png" alt="Scroll" />
                </div>
                <div className="image-container">
                    <div className="image-gradient">
                        <img src={leslispa} alt="Spa Background" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LesliSpa;
