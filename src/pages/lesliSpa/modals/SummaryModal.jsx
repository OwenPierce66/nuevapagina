import React from 'react';
import './SummaryModal.scss'; // Asegúrate de que la ruta y el nombre sean correctos
import { useNavigate } from 'react-router-dom';
// El modal ahora recibe una lista de servicios ('servicesInQuote')
// y una función para ir al modal de agregar servicio ('onAddServiceClick')
const SummaryModal = ({ isOpen, onClose, onAddServiceClick, servicesInQuote }) => {
    // <--- AÑADE ESTA LÍNEA DE DEBUG AL PRINCIPIO
    console.log("SummaryModal recibiendo servicios:", servicesInQuote);
    const navigate = useNavigate();

    // Si el modal no está abierto, no renderiza nada
    if (!isOpen) return null;

    // Ya no necesitamos el check if (!service) return null;

    const handleProgramarCita = () => {
        navigate('/leslispa/bookingpage', { state: { selectedServices: servicesInQuote } });
    };

    // Opcionalmente, puedes añadir un mensaje si la lista está vacía
    if (!servicesInQuote || servicesInQuote.length === 0) {
        return (
            <div className="modal-overlay" onClick={onClose}>
                <div className="modal-content" onClick={e => e.stopPropagation()}>
                    <div className="modal-header">
                        <h2>Resumen de la cita</h2>
                        <button className="close-button" onClick={onClose}>&times;</button>
                    </div>
                    <div className="modal-body">
                        <p>No hay servicios agregados a la cita.</p>
                    </div>
                    <div className="modal-footer">
                        <button className="add-service-btn" onClick={onAddServiceClick}>+ Agregar primer servicio</button>
                    </div>
                </div>
            </div>
        );
    }


    return (
        // Overlay del modal (fondo oscuro que cubre la pantalla)
        <div className="modal-overlay" onClick={onClose}>
            {/* Contenido del modal */}
            {/* Usamos onClick={e => e.stopPropagation()} para evitar que el clic dentro del modal cierre el modal */}
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h2>Resumen de la cita</h2>
                    {/* Botón de cerrar */}
                    <button className="close-button" onClick={onClose}>
                        &times;
                    </button>
                </div>
                <div className="modal-body">
                    {/* Muestra la lista de servicios agregados a la cita */}
                    <div className="service-list-in-quote">
                        {/* Este es el mapeo que debe mostrar cada servicio */}
                        {servicesInQuote.map((service, index) => (
                            // Es mejor usar un ID único si lo tienes, pero index puede servir para depurar
                            <div className="service-item-summary" key={index}>
                                {/* Muestra el título, duración y precio de cada servicio */}
                                <h3>{service.titulo}</h3>
                                {/* Asegúrate de que estos detalles existan en tus objetos de servicio */}
                                <p>{service.duracion} &bull; {service.precio}</p>
                                {/* Si necesitas mostrar detalles adicionales que aplican a toda la cita, no a un servicio individual */}
                                {/* <p className="quote-details">Detalles adicionales de la cita...</p> */}
                            </div>
                        ))}
                    </div>


                    {/* Sección para agregar otro servicio */}
                    <div className="add-service-section">
                        <p>¿Quieres agregar otro servicio a esta cita?</p>
                        {/* Este botón ahora llama a la función para abrir el otro modal */}
                        <button className="add-service-btn" onClick={onAddServiceClick}>
                            + Agregar otro servicio
                        </button>
                    </div>

                </div>
                <div className="modal-footer">
                    {/* Botón para programar la cita (funcionalidad a implementar después) */}
                    <button className="programar-cita-btn" onClick={handleProgramarCita}>
                        Programar cita
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SummaryModal;