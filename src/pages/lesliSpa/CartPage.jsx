// CartPage.jsx
import React from 'react';
import './CartPage.scss'; // Creamos un archivo SCSS para la página del carrito
import { Link } from 'react-router-dom'; // Si quieres un botón Volver que navegue
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

// Componente de la página completa del carrito
// Recibe los items y las funciones para modificar el carrito desde App.jsx
const CartPage = ({ cartItems, onUpdateQuantity, onRemoveItem }) => {

    // Calcula el subtotal (misma lógica que en el sidebar)
    const subtotal = cartItems.reduce((sum, item) => {
        const price = parseFloat(item.precio.replace('$', '').replace(',', ''));
        return sum + (price * item.quantity);
    }, 0);

    const formattedSubtotal = `$${subtotal.toFixed(2)}`;


    return (
        <div className="cart-page-container">
            <h1>Carrito de compras</h1> {/* Título de la página */}

            <div className="cart-page-grid">
                <div className="cart-items-section">
                    <h2>Mi carrito ({cartItems.length} {cartItems.length === 1 ? 'item' : 'items'})</h2>
                    {cartItems.length === 0 ? (
                        <p className="empty-cart-message">Tu carrito está vacío.</p>
                    ) : (
                        <div className="cart-items-list">
                            {cartItems.map(item => (
                                <div className="cart-item" key={item.id}>
                                    <div className="item-image">
                                        <img src={item.imagen} alt={item.nombre} />
                                    </div>
                                    <div className="item-details">
                                        <div className="item-name-price">
                                            <p className="item-name">{item.nombre}</p>
                                            <p className="item-price">{item.precio}</p>
                                        </div>
                                        <div className="item-quantity-remove">
                                            <div className="quantity-controls">
                                                <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>-</button>
                                                <span>{item.quantity}</span>
                                                <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>+</button>
                                            </div>
                                            <button className="remove-item" onClick={() => onRemoveItem(item.id)}>
                                                <FontAwesomeIcon icon={faTrash} />
                                            </button>
                                        </div>
                                    </div>
                                    {/* Muestra el subtotal por item en la página completa */}
                                    <div className="item-line-total">
                                        ${(parseFloat(item.precio.replace('$', '').replace(',', '')) * item.quantity).toFixed(2)}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Enlaces/botones adicionales bajo la lista del carrito */}
                    <div className="cart-addons">
                        <div className="promo-code">
                            {/* Puedes añadir un icono aquí */}
                            <span>Ingresar código promocional</span>
                        </div>
                        <div className="add-note">
                            {/* Puedes añadir un icono aquí */}
                            <span>Agregar una nota</span>
                        </div>
                    </div>

                </div>

                <div className="order-summary-section">
                    <h2>Resumen del pedido</h2>
                    <div className="summary-details">
                        <div className="summary-row">
                            <span>Subtotal</span>
                            <span>{formattedSubtotal}</span>
                        </div>
                        {/* Detalles de Envío */}
                        <div className="summary-row">
                            <span>Envío</span>
                            <span>GRATIS</span>
                        </div>
                        <div className="summary-row shipping-location">
                            {/* Mostrar ubicación de envío si aplica */}
                            <span>Chihuahua, México</span> {/* Ejemplo estático */}
                        </div>
                        {/* Línea divisoria */}
                        <div className="divider"></div>
                        {/* Total */}
                        <div className="summary-row total-row">
                            <span>Total</span>
                            <span>{formattedSubtotal}</span>
                        </div>
                    </div>

                    {/* Botón Finalizar compra */}
                    <button className="finalizar-compra-btn">Finalizar compra</button>
                    {/* Mensaje de pago seguro */}
                    <div className="secure-payment">
                        {/* Puedes añadir un icono de candado aquí */}
                        <span>Pago seguro</span>
                    </div>
                </div>
            </div>

            {/* Botón o enlace para seguir comprando, si lo deseas en la página completa */}
            {/* <Link to="/leslispa/tienda" className="continue-shopping-link">Seguir comprando</Link> */}
        </div>
    );
};

export default CartPage;