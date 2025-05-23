import React from 'react';
import './ExitConfirmationModal.scss';

const ExitConfirmationModal = ({ isOpen, onCancel, onConfirm }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onCancel}>
            <div className="modal-contentt" onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={onCancel}>&times;</button>
                <h2>¿Salir sin reservar?</h2>
                <p>Si te vas ahora, tu cita no se guardará.</p>
                <div className="modal-footer">
                    <button className="primary-btn" onClick={onCancel}>Seguir reservando</button>
                    <button className="secondary-btn" onClick={onConfirm}>No reservar</button>
                </div>
            </div>
        </div>
    );
};

export default ExitConfirmationModal;
