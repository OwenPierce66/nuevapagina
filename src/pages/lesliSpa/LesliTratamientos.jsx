import React, { useState } from "react";
import './LesliTratamientos.scss';
import piedras from "../../images/piedras.png";
import masajecuello from "../../images/masajecuello.png";
import masajeacostado from "../../images/masajeacostado.webp";
import masajesal from "../../images/masajesal.webp";
import mascarilla from "../../images/mascarilla.webp";
import masajehidratante from "../../images/masajehidratante.webp";
import masajecabello from "../../images/masajecabello.webp";
import shiatsu from "../../images/shiatsu.png";
import NavbarLesli from './NavbarLesli';
import PiePaginaLesli from './PiePaginaLesli';
import SummaryModal from "./modals/SummaryModal";
import AddServiceModal from "./modals/AddServiceModal";
import { useNavigate } from "react-router-dom";

const LesliTratamientos = () => {
    const [categoriaActiva, setCategoriaActiva] = useState("Todos");
    const [isSummaryModalOpen, setIsSummaryModalOpen] = useState(false);
    const [isAddServiceModalOpen, setIsAddServiceModalOpen] = useState(false);
    const [selectedServicesInQuote, setSelectedServicesInQuote] = useState([]);
    const navigate = useNavigate();

    const servicios = [
        {
            titulo: "Masaje de piedras calientes",
            descripcion: "Describe uno de tus servicios en esta área.",
            duracion: "1 h 30 min",
            precio: "$850",
            categoria: "Masajes",
            imagen: piedras
        },
        {
            titulo: "Masaje de tejido profundo",
            descripcion: "Describe uno de tus servicios en esta área.",
            duracion: "1 h",
            precio: "$875",
            categoria: "Masajes",
            imagen: masajecuello
        },
        {
            titulo: "Masaje Shiatsu",
            descripcion: "Describe uno de tus servicios en esta área.",
            duracion: "1 h 30 min",
            precio: "$999",
            categoria: "Masajes",
            imagen: shiatsu
        },
        {
            titulo: "Tratamiento de cuerpo entero",
            descripcion: "Describe uno de tus servicios en esta área.",
            duracion: "1 h",
            precio: "$850",
            categoria: "Exfoliaciones",
            imagen: masajesal
        },
        {
            titulo: "Mascarilla corporal desintoxicante",
            descripcion: "Describe uno de tus servicios en esta área.",
            duracion: "1 h",
            precio: "$850",
            categoria: "Tratamientos corporales",
            imagen: mascarilla
        },
        {
            titulo: "Envoltura corporal hidratante",
            descripcion: "Describe uno de tus servicios en esta área.",
            duracion: "45 min",
            precio: "$670",
            categoria: "Tratamientos corporales",
            imagen: masajehidratante
        },
        {
            titulo: "Masaje de cuero cabelludo",
            descripcion: "Describe uno de tus servicios en esta área.",
            duracion: "30 min",
            precio: "$600",
            categoria: "Tratamientos corporales",
            imagen: masajecabello
        }
    ];

    const serviciosFiltrados = categoriaActiva === "Todos"
        ? servicios
        : servicios.filter(serv => serv.categoria === categoriaActiva);

    const handleRemoveService = (serviceToRemove) => {
        setSelectedServicesInQuote(prevServices =>
            prevServices.filter(service => service.titulo !== serviceToRemove.titulo)
        );
    };

    const handleReservarClick = (service) => {
        setSelectedServicesInQuote([service]);
        navigate('/leslispa/bookingpage', { state: { selectedServices: [service] } });
        setIsSummaryModalOpen(true);
        setIsAddServiceModalOpen(false);
    };

    const handleAddServiceClick = () => {
        setIsSummaryModalOpen(false);
        setIsAddServiceModalOpen(true);
    };

    const handleServiceSelectInAddModal = (service) => {
        setSelectedServicesInQuote(prevServices => {
            const newServices = [...prevServices, service];
            return newServices;
        });
        setIsAddServiceModalOpen(false);
        setIsSummaryModalOpen(true);
    };

    const handleCloseAllModals = () => {
        setIsSummaryModalOpen(false);
        setIsAddServiceModalOpen(false);
    };

    const handleBackToSummary = () => {
        setIsAddServiceModalOpen(false);
        setIsSummaryModalOpen(true);
    };

    return (
        <div>
            <div><NavbarLesli /></div>

            <section className="tratamientos-section">
                <h2 className="tratamientos-title">TRATAMIENTOS</h2>
                <p className="tratamientos-text">Descubre una experiencia de relajación y bienestar única en Lesli Spa.
                    Nuestros tratamientos están diseñados para revitalizar tu cuerpo y mente, utilizando técnicas
                    ancestrales y productos naturales de la más alta calidad.</p>
                <p className="tratamientos-text">Sumérgete en un ambiente de tranquilidad y déjate consentir por
                    nuestro equipo de expertos terapeutas, quienes te brindarán un servicio personalizado y
                    atento a tus necesidades.</p>

                <div className="tratamientos-buttons">
                    {["Todos", "Masajes", "Exfoliaciones", "Tratamientos corporales"].map((cat) => (
                        <button
                            key={cat}
                            className={categoriaActiva === cat ? "active" : ""}
                            onClick={() => setCategoriaActiva(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </section>

            <div className='separar'>
                {serviciosFiltrados.map((servicio, index) => (
                    <div className="servicio-item" key={index}>
                        <img src={servicio.imagen} alt={servicio.titulo} />
                        <div className="servicio-info">
                            <h3>{servicio.titulo}</h3>
                            <p>{servicio.descripcion}</p>
                            <hr />
                            <p className="duracion">{servicio.duracion}</p>
                            <p className="precio">{servicio.precio}</p>
                            <button
                                className="reservar-btn"
                                onClick={() => handleReservarClick(servicio)}
                            >
                                Reservar ahora
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div><PiePaginaLesli /></div>

            {isSummaryModalOpen && (
                <SummaryModal
                    isOpen={isSummaryModalOpen}
                    onClose={handleCloseAllModals}
                    onAddServiceClick={handleAddServiceClick}
                    servicesInQuote={selectedServicesInQuote}
                    onRemoveService={handleRemoveService}
                />
            )}

            {isAddServiceModalOpen && (
                <AddServiceModal
                    isOpen={isAddServiceModalOpen}
                    onClose={handleCloseAllModals}
                    onServiceSelect={handleServiceSelectInAddModal}
                    onBack={handleBackToSummary}
                    allServices={servicios}
                />
            )}
        </div>
    );
};

export default LesliTratamientos;