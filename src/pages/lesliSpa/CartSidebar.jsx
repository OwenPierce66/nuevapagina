// CartSidebar.jsx
import React from 'react';
import './CartSidebar.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom'; // Importa useNavigate


// Componente del Sidebar del Carrito
// Recibe items, estado de apertura, función de cerrar, y funciones para modificar el carrito
const CartSidebar = ({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem }) => {

    // Usa el hook useNavigate
    const navigate = useNavigate();

    // Si el sidebar no está abierto, no renderiza nada
    if (!isOpen) return null;

    // Calcula el subtotal
    const subtotal = cartItems.reduce((sum, item) => {
        const price = parseFloat(item.precio.replace('$', '').replace(',', ''));
        return sum + (price * item.quantity);
    }, 0);

    const formattedSubtotal = `$${subtotal.toFixed(2)}`;

    // Handler para el botón "Ver carrito"
    const handleViewCartClick = () => {
        onClose(); // Cierra el sidebar
        navigate('/leslispa/carrito'); // Navega a la página del carrito
    };


    return (
        // Overlay del sidebar
        <div className="cart-overlay" onClick={onClose}>
            {/* Contenido del sidebar */}
            <div className="cart-sidebar" onClick={e => e.stopPropagation()}>
                <div className="sidebar-header">
                    <h2>Carrito ({cartItems.length} {cartItems.length === 1 ? 'item' : 'items'})</h2>
                    <button className="close-sidebar" onClick={onClose}>
                        &times;
                    </button>
                </div>

                <div className="sidebar-body">
                    {/* ... (JSX para la lista de items del carrito, quantity controls, remove button) ... */}
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
                                            <div>
                                                <p className="item-name">{item.nombre}</p>
                                                <p className="item-price">{item.precio}</p>
                                                {item.tamano && <p className="item-size">Size: {item.tamano}</p>}
                                            </div>
                                            <button className="remove-item" onClick={() => onRemoveItem(item.id)}>
                                                <FontAwesomeIcon icon={faTrash} />
                                            </button>
                                        </div>

                                        <div className="item-quantity-remove">
                                            <div className="quantity-controls">
                                                <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>-</button>
                                                <span>{item.quantity}</span>
                                                <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>+</button>
                                            </div>
                                            <div className="item-total">
                                                <span> ${(parseFloat(item.precio.replace('$', '').replace(',', '')) * item.quantity).toFixed(2)}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <div className="sidebar-footer">
                    <div className="subtotal-row">
                        <span>Subtotal</span>
                        <span>{formattedSubtotal}</span>
                    </div>
                    {/* Botón para ir a la página del carrito */}
                    <button className="payment-page-button" onClick={() => navigate('/leslispa/checkout')}>
                        Página de pago
                    </button>

                    <button className="checkout-button" onClick={handleViewCartClick}>
                        Ver carrito
                    </button>
                    {/* El botón negro ya no es "Continuar comprando" */}
                    {/* <button className="continue-shopping-button">...</button> */}
                </div>
            </div>
        </div>
    );
};

export default CartSidebar;