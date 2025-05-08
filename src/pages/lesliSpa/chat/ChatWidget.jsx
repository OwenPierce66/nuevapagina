import React, { useState, useEffect, useRef } from 'react';
import './ChatWidget.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import sendIcon from "../../../images/send.svg";

const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [formularioMostrado, setFormularioMostrado] = useState(false);
    const [messages, setMessages] = useState([
        { text: 'Hola, ¿en qué podemos ayudarte?', sender: 'bot' }
    ]);
    const messagesEndRef = useRef(null);

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSendMessage = () => {
        if (inputValue.trim() !== '') {
            const userMessage = { text: inputValue, sender: 'user' };
            const nuevosMensajes = [userMessage];

            if (!formularioMostrado) {
                const mensajeFormulario = { text: '', sender: 'formulario' };
                nuevosMensajes.push(mensajeFormulario);
                setFormularioMostrado(true);
            }

            setMessages(prevMessages => [...prevMessages, ...nuevosMensajes]);
            setInputValue('');
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            handleSendMessage();
        }
    };

    const enviarFormulario = () => {
        const nombre = document.querySelector('.formulario-contacto input[name="nombre"]').value;
        const email = document.querySelector('.formulario-contacto input[name="email"]').value;

        console.log('Formulario enviado:', { nombre, email });
        alert('¡Gracias por tus datos!');
    };

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    return (
        <div className="chat-widget-container">
            {isOpen ? (
                <div className="chat-window">
                    <div className="chat-header">
                        <h3>Serenidad Terapia Spa</h3>
                        <div className='separar-icon-chat'>
                            <span className="status-indicator online"></span>
                            <span className="header-status">Te responderemos tan pronto como podamos...</span>
                        </div>
                        <button className="close-button" onClick={toggleChat}>
                            &times;
                        </button>
                    </div>
                    <div className="chat-body">
                        {messages.map((message, index) => (
                            <div key={index} className={`message ${message.sender}`}>
                                {message.sender === 'formulario' ? (
                                    <div className="formulario-contacto">
                                        <p>Hola, deja tus datos para que podamos contactarte aunque te hayas retirado del sitio.</p>
                                        <input type="text" placeholder="Nombre" name="nombre" />
                                        <input type="email" placeholder="Email" name="email" />
                                        <button onClick={enviarFormulario}>Enviar</button>
                                    </div>
                                ) : (
                                    message.text
                                )}
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>

                    <div className="chat-input-area">
                        <input
                            type="text"
                            placeholder="Escribe tu mensaje..."
                            value={inputValue}
                            onChange={handleInputChange}
                            onKeyPress={handleKeyPress}
                        />
                        <span className="input-icon">
                            <ion-icon name="happy-outline"></ion-icon>
                        </span>
                        <span className="input-icon">
                            <ion-icon name="attach-outline"></ion-icon>
                        </span>
                        {inputValue !== '' && (
                            <button className="send-button" onClick={handleSendMessage}>
                                <img src={sendIcon} alt="Send" className="send-icon-svg" />
                            </button>
                        )}
                    </div>
                </div>
            ) : (
                <button className="chat-icon-button" onClick={toggleChat}>
                    <div className='igual'>=</div>
                    <FontAwesomeIcon icon={faComment} />
                </button>
            )}
        </div>
    );
};

export default ChatWidget;
