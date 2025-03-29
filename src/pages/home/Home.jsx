import React from "react";
import "./home.scss";
import centerImage from "../../images/image.png"; // Reemplaza con la ruta de tu imagen

function Home() {
    return (
        <div className="">
            <nav className="navbar">
                <ul>
                    <li>Tiendas</li>
                    <li>Mac</li>
                    <li>iPad</li>
                    <li>iPhone</li>
                    <li>Watch</li>
                    <li>AirPods</li>
                    <li>TV y Casa</li>
                    <li>Entretenimiento</li>
                    <li>Accesorios</li>
                    <li>Soporte</li>
                </ul>
            </nav>
            <div className="main-content">
                <h1>iPhone 16 Pro</h1>
                <p>Diseñado para Apple Intelligence.</p>
                <div className="image-container">
                    <img src={centerImage} alt="iPhone 16 Pro" />
                </div>
                <div className="buttons">
                    <button className="btn-info">Más información</button>
                    <button className="btn-buy">Comprar</button>
                </div>
                <p className="note">
                    Apple Intelligence ya está disponible en inglés de EE.UU.
                </p>
            </div>
        </div>
    );
}

export default Home;
