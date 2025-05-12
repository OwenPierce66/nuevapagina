import React from 'react';
import './SummaryModal.scss';
import { useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const SummaryModal = ({ isOpen, onClose, onAddServiceClick, servicesInQuote, onRemoveService }) => {
    const navigate = useNavigate();
    const location = useLocation();

    if (!isOpen) return null;

    const handleProgramarCita = () => {
        onClose(); // Just close the modal
    };

    if (!servicesInQuote || servicesInQuote.length === 0) {
        return (
            <div className="modal-overlay" onClick={handleOverlayClick}>
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

    const handleOverlayClick = (e) => {
        if (e.target.className === 'modal-overlay') {
            onClose();
        }
    };

    const handleRemoveService = (serviceToRemove) => {
        onRemoveService(serviceToRemove);
    };

    return (
        <div className="modal-overlay" onClick={handleOverlayClick}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <div className="modal-title">Resumen de la cita</div>
                    <button className="close-button" onClick={onClose}>
                        &times;
                    </button>
                </div>
                <div className="modal-body">
                    <div className="service-list-in-quote">
                        {servicesInQuote.map((service, index) => (
                            <div className="service-item-summary" key={index}>
                                <div className="service-details">
                                    <div>{service.titulo}</div>
                                    <div>Av. Fray Antonio Alcalde 10
                                    </div>
                                    <div>Con Miembro del equipo n.º 1&bull; {service.duracion} &bull; {service.precio}</div>
                                </div>
                                <div className="remove-service-icon">
                                    <FontAwesomeIcon icon={faTrash} onClick={() => handleRemoveService(service)} />
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="add-service-section">
                        <p>¿Quieres agregar otro servicio a esta cita?</p>
                        <button className="add-service-btn" onClick={onAddServiceClick}>
                            + Agregar otro servicio
                        </button>
                    </div>
                </div>
                <div className="modal-footer">
                    <button className="programar-cita-btn" onClick={handleProgramarCita}>
                        Programar cita
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SummaryModal;