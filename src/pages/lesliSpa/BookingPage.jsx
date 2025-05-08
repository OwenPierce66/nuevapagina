import React, { useState, useEffect } from 'react';
import './BookingPage.scss';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import dayjs from 'dayjs';
import 'dayjs/locale/es';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import SummaryModal from "./modals/SummaryModal";
import AddServiceModal from "./modals/AddServiceModal";
import { useNavigate, useLocation } from 'react-router-dom';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
dayjs.locale('es');

const BookingPage = ({ selectedServicesForBooking = [] }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const selectedServicesFromLocation = location.state?.selectedServices || [];
    const [selectedServicesInQuote, setSelectedServicesInQuote] = useState(selectedServicesFromLocation);

    const [currentView, setCurrentView] = useState('selectDateTime');
    const [showAllSessions, setShowAllSessions] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState(null);
    const [clientName, setClientName] = useState('');
    const [clientSurname, setClientSurname] = useState('');
    const [clientEmail, setClientEmail] = useState('');
    const [clientPhone, setClientPhone] = useState('');
    const [clientMessage, setClientMessage] = useState('');
    const [isSummaryModalOpen, setIsSummaryModalOpen] = useState(false);
    const [isAddServiceModalOpen, setIsAddServiceModalOpen] = useState(false);


    const [subtotal, setSubtotal] = useState(0);
    const [iva, setIva] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        // Calcula el subtotal sumando los precios de los servicios seleccionados
        const newSubtotal = selectedServicesInQuote.reduce((acc, service) => {
            const price = parseFloat(service.precio.replace('$', ''));
            return acc + price;
        }, 0);
        setSubtotal(newSubtotal);

        // Calcula el IVA (por ejemplo, 16%)
        const newIva = newSubtotal * 0.16;
        setIva(newIva);

        // Calcula el total sumando el subtotal y el IVA
        const newTotal = newSubtotal + newIva;
        setTotal(newTotal);
    }, [selectedServicesInQuote]);


    const [times, setTimes] = useState([
        '10:00', '10:30', '11:00', '11:30',
        '12:00', '12:30', '13:00', '13:30',
        '14:00', '14:30', '15:00', '15:30',
        '16:00', '16:30'
    ]);

    const servicios = [
        {
            titulo: "Masaje de piedras calientes",
            descripcion: "Describe uno de tus servicios en esta área.",
            duracion: "1 h 30 min",
            precio: "$850",
            categoria: "Masajes",
            imagen: "piedras"
        },
        {
            titulo: "Masaje de tejido profundo",
            descripcion: "Describe uno de tus servicios en esta área.",
            duracion: "1 h",
            precio: "$875",
            categoria: "Masajes",
            imagen: "masajecuello"
        },
        {
            titulo: "Masaje Shiatsu",
            descripcion: "Describe uno de tus servicios en esta área.",
            duracion: "1 h 30 min",
            precio: "$999",
            categoria: "Masajes",
            imagen: "shiatsu"
        }
    ];

    const isWeekday = (date) => {
        const day = dayjs(date).day();
        return day >= 1 && day <= 5; // 1-5 corresponds to Monday-Friday
    };

    const formatTimeDisplay = (time24hr) => {
        if (!time24hr) return '';
        const [hour, minute] = time24hr.split(':');
        const hourInt = parseInt(hour, 10);
        const ampm = hourInt >= 12 ? 'p.m.' : 'a.m.';
        const formattedHour = hourInt % 12 || 12;
        return `${formattedHour}:${minute} ${ampm}`;
    };

    const handleTimeClick = (time) => {
        setSelectedTime(time);
    };

    const handleDateChange = (date) => {
        setSelectedDate(date);
        setSelectedTime(null);
    };

    const handleNextClick = () => {
        if (selectedDate && selectedTime && isWeekday(selectedDate)) {
            setCurrentView('enterDetails');
        } else {
            alert('Por favor, selecciona una fecha y hora válida (Lunes a Viernes).');
        }
    };

    const handleBackClick = () => {
        navigate('/leslispa/tratamientos');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleReservarClick = (service) => {
        setSelectedServicesInQuote([service]);
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
        <div className="booking-page">
            <div className="header">
                {currentView === 'selectDateTime' && (
                    <>
                        <div className="texto-informativo">
                            <button className="back-button" onClick={handleBackClick}>
                                &lt; Volver
                            </button>

                            <h1>Programa tu cita</h1>
                            <p>Revisa nuestra disponibilidad y reserva la fecha y hora que más te convengan</p>
                        </div>

                        <div className='separar-titulos'>
                            <div className='texto-titulo' >Selecciona fecha y hora</div>
                            <div className="timezone-info">Zona horaria: hora estándar central (GMT-6)</div>
                        </div>

                        <div className="booking-grid">
                            <div className="calendar-section">
                                <div className='calendar-container'>
                                    <div className="calendar-header">
                                        <button onClick={() => setSelectedDate(new Date(selectedDate.setMonth(selectedDate.getMonth() - 1)))}>&lt;</button>
                                        <span>{dayjs(selectedDate).format('MMMM YYYY')}</span>
                                        <button onClick={() => setSelectedDate(new Date(selectedDate.setMonth(selectedDate.getMonth() + 1)))}>&gt;</button>
                                    </div>
                                    <Calendar
                                        onChange={handleDateChange}
                                        value={selectedDate}
                                        calendarType="gregory"
                                        className="react-calendar-custom"
                                        tileDisabled={({ date }) => !isWeekday(date)}
                                    />
                                </div>

                                <div className='calendar-info'>
                                    {selectedDate && (
                                        <>
                                            <label>Disponibilidad para: {dayjs(selectedDate).format('dddd, D [de] MMMM')}</label>
                                            {!isWeekday(selectedDate) ? (
                                                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                                                    <p style={{ marginBottom: '10px' }}>
                                                        No hay disponibilidad en este día. Selecciona un día de Lunes a Viernes.
                                                    </p>
                                                </div>
                                            ) : (
                                                <>
                                                    <div className="time-options">
                                                        {times.map((time) => (
                                                            <button
                                                                key={time}
                                                                className={selectedTime === time ? 'time-slot selected' : 'time-slot'}
                                                                onClick={() => handleTimeClick(time)}
                                                            >
                                                                {formatTimeDisplay(time)}
                                                            </button>
                                                        ))}
                                                    </div>

                                                    {!showAllSessions && (
                                                        <div className="show-more-sessions" style={{ textAlign: 'center', marginTop: '10px' }}>
                                                            <button onClick={() => setShowAllSessions(true)} className="show-more-button">
                                                                Mostrar todas las sesiones
                                                            </button>
                                                        </div>
                                                    )}

                                                    {showAllSessions && (
                                                        <div className="time-options">
                                                            {times.slice(10).map((time) => (
                                                                <button
                                                                    key={time}
                                                                    className={selectedTime === time ? 'time-slot selected' : 'time-slot'}
                                                                    onClick={() => handleTimeClick(time)}
                                                                >
                                                                    {formatTimeDisplay(time)}
                                                                </button>
                                                            ))}
                                                        </div>
                                                    )}
                                                </>
                                            )}
                                        </>
                                    )}
                                </div>
                            </div>

                            <div className="summary-section">
                                <div className="texto-reserva">Datos de la reserva</div>

                                <div className="summary-header">
                                    <div className="summary-separar">
                                        <div>
                                            {selectedServicesInQuote.length > 0 ? (
                                                selectedServicesInQuote.map((service, index) => (
                                                    <div key={index} className="summary-service-item">
                                                        <p><strong>{service.titulo}</strong></p>
                                                        <p>{service.duracion} • {service.precio}</p>
                                                    </div>
                                                ))
                                            ) : (
                                                <p>No se han seleccionado servicios.</p>
                                            )}
                                            {selectedDate && (
                                                <p className="summary-date">
                                                    {dayjs(selectedDate).format('dddd, D [de] MMMM')}
                                                </p>
                                            )}
                                            {selectedTime && (
                                                <p className="summary-time">
                                                    Hora: {formatTimeDisplay(selectedTime)}
                                                </p>
                                            )}
                                            <p>Av. Fray Antonio Alcalde 10</p>
                                        </div>
                                        <div className='subir-boton'>
                                            <button className="edit-link" onClick={handleAddServiceClick}>
                                                <div className='separar-editar'>
                                                    <div>
                                                        <FontAwesomeIcon icon={faEdit} />
                                                    </div>
                                                    <div>Editar</div>
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                    <div className='editar-botones'>
                                        <button
                                            className={`confirm-btn ${!selectedDate || !selectedTime || !isWeekday(selectedDate) ? 'disabled' : ''}`}
                                            onClick={handleNextClick}
                                            disabled={!selectedDate || !selectedTime || !isWeekday(selectedDate)}
                                        >
                                            Siguiente
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}

                {currentView === 'enterDetails' && (
                    <div className="booking-form-view">
                        <button className="back-button" onClick={handleBackClick}>
                            &lt; Volver
                        </button>

                        <h1>Formulario de reserva</h1>

                        <div className="form-grid">
                            <div className="client-details-section">
                                <div className='quitarborder'>Detalles del cliente</div>
                                <p className="login-prompt">¿Ya tienes una cuenta? <a href="#">Inicia sesión</a></p>

                                <form onSubmit={handleSubmit}>
                                    <div className="form-separar">

                                        <div className="form-group">
                                            <label htmlFor="clientName">Nombre *</label>
                                            <input
                                                className='inputs'
                                                type="text"
                                                id="clientName"
                                                value={clientName}
                                                onChange={(e) => setClientName(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="clientSurname">Apellido *</label>
                                            <input
                                                className='inputs'

                                                type="text"
                                                id="clientSurname"
                                                value={clientSurname}
                                                onChange={(e) => setClientSurname(e.target.value)}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="form-separar">

                                        <div className="form-group">
                                            <label htmlFor="clientEmail">Email *</label>
                                            <input
                                                className='inputs'

                                                type="email"
                                                id="clientEmail"
                                                value={clientEmail}
                                                onChange={(e) => setClientEmail(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="clientPhone">Teléfono</label>
                                            <PhoneInput
                                                className='inputs2'
                                                placeholder=""
                                                value={clientPhone}
                                                onChange={setClientPhone}
                                                defaultCountry="MX" // Establece México como país por defecto
                                            />
                                            {/* <input
                                                type="tel"
                                                id="clientPhone"
                                                value={clientPhone}
                                                onChange={(e) => setClientPhone(e.target.value)}
                                            /> */}
                                        </div>
                                    </div>

                                    <div className="form-group full-width">
                                        <label htmlFor="clientMessage">Agrega tu mensaje aquí</label>
                                        <textarea
                                            id="clientMessage"
                                            value={clientMessage}
                                            onChange={(e) => setClientMessage(e.target.value)}
                                            rows="4"
                                        ></textarea>
                                    </div>

                                </form>
                            </div>

                            <div className="summary-section form-summary">
                                <div className='subir-toto'>
                                    <h3>Datos de la reserva</h3>
                                    {selectedServicesInQuote.length > 0 ? (
                                        selectedServicesInQuote.map((service, index) => (
                                            <div key={index} className="summary-service-item">
                                                <p><div>{service.titulo}</div></p>
                                                <p>{service.duracion} &bull; {service.precio}</p>
                                            </div>
                                        ))
                                    ) : (
                                        <p>No se han seleccionado servicios.</p>
                                    )}
                                    {selectedDate && selectedTime && (
                                        <div className="summary-datetime">
                                            {dayjs(selectedDate).format('D [de] MMMM [de] YYYY')}, {formatTimeDisplay(selectedTime)}
                                        </div>
                                    )}
                                    <p>Av. Fray Antonio Alcalde 10</p>
                                    <p>Con Miembro del equipo n.º 1</p>

                                    <div className="payment-summary">
                                        <h3>Detalles del pago</h3>
                                        <p>Subtotal <span>${subtotal.toFixed(2)}</span></p>
                                        <p>IVA <span>${iva.toFixed(2)}</span></p>
                                        <p>Total <span>${total.toFixed(2)}</span></p>
                                    </div>
                                    <p className="notification-text">
                                        Al completar tu reserva, aceptas recibir notificaciones por SMS sobre la reserva.
                                    </p>
                                    <div className="form-actions">
                                        <button type="submit" className="confirm-btn">
                                            Reservar ahora
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {isSummaryModalOpen && (
                <SummaryModal
                    isOpen={isSummaryModalOpen}
                    onClose={handleCloseAllModals}
                    onAddServiceClick={handleAddServiceClick}
                    servicesInQuote={selectedServicesInQuote}
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
        </div >
    );
};

export default BookingPage;