import React, { useState } from 'react';
import './AddServiceModal.scss'; // Creamos este archivo SCSS para este modal
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faChevronRight } from "@fortawesome/free-solid-svg-icons"; // Íconos de búsqueda y flecha

const AddServiceModal = ({ isOpen, onClose, onServiceSelect, onBack, allServices }) => {
    const [searchTerm, setSearchTerm] = useState('');

    if (!isOpen) return null;

    // Lógica simple de filtrado por título o categoría
    const filteredServices = allServices.filter(service =>
        service.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.categoria.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Agrupar servicios por categoría para mostrarlos como en la imagen
    const servicesByCategory = filteredServices.reduce((acc, service) => {
        const { categoria } = service;
        if (!acc[categoria]) {
            acc[categoria] = [];
        }
        acc[categoria].push(service);
        return acc;
    }, {});


    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content add-service-modal" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h2>Agregar a tu cita</h2>
                    {/* Botón de cerrar */}
                    <button className="close-button" onClick={onClose}>
                        &times;
                    </button>
                </div>
                <div className="modal-body">
                    {/* Barra de búsqueda */}
                    <div className="search-bar">
                        <input
                            type="text"
                            placeholder="Buscar"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <FontAwesomeIcon icon={faSearch} className="search-icon" />
                    </div>

                    {/* Lista de servicios agrupados por categoría */}
                    <div className="service-list-add">
                        {Object.entries(servicesByCategory).map(([categoria, serviciosDeEstaCategoria]) => (
                            <div key={categoria} className="service-category-group">
                                <h3 className="category-title">{categoria}</h3>
                                {serviciosDeEstaCategoria.map(service => (
                                    <div
                                        key={service.titulo} // Usar título como key, o un ID único si tienes
                                        className="service-item-add"
                                        onClick={() => onServiceSelect(service)} // Llama al handler al seleccionar
                                    >
                                        <div className="service-info-add">
                                            <p className="service-title-add">{service.titulo}</p>
                                            <p className="service-price-add">{service.precio}</p>
                                        </div>
                                        <FontAwesomeIcon icon={faChevronRight} className="select-icon" /> {/* Flecha */}
                                    </div>
                                ))}
                            </div>
                        ))}
                        {/* Mensaje si no hay servicios */}
                        {filteredServices.length === 0 && searchTerm !== '' && (
                            <p className="no-results">No se encontraron servicios.</p>
                        )}
                    </div>

                </div>
                <div className="modal-footer">
                    {/* Botón para volver al modal anterior */}
                    <button className="back-button" onClick={onBack}>
                        &lt; Volver
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddServiceModal;