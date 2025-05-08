// ProductDetail.jsx
import React, { useState } from 'react';
import './ProductDetail.scss';

// Recibe el producto, la función para volver y las funciones del carrito
const ProductDetail = ({ product, onBack, addToCart, setIsCartOpen }) => { // Recibe setIsCartOpen
    const [quantity, setQuantity] = useState(1);


    const [openSections, setOpenSections] = useState({
        producto: true,
        devolucion: false,
        envio: false
    });

    const toggleSection = (key) => {
        setOpenSections(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    };


    if (!product) {
        return <div className="product-detail-container">Producto no encontrado.</div>;
    }

    const handleQuantityChange = (e) => {
        const value = parseInt(e.target.value, 10);
        if (!isNaN(value) && value > 0) {
            setQuantity(value);
        } else if (e.target.value === '') {
            setQuantity('');
        }
    };

    const incrementQuantity = () => {
        setQuantity(prevQuantity => {
            const newValue = prevQuantity === '' ? 1 : prevQuantity + 1;
            console.log('Incrementando cantidad:', newValue);
            return newValue;
        });
    };

    const decrementQuantity = () => {
        setQuantity(prevQuantity => {
            const newValue = prevQuantity > 1 ? prevQuantity - 1 : (prevQuantity === '' ? '' : 1);
            console.log('Decrementando cantidad:', newValue);
            return newValue;
        });
    };

    // Handler para añadir producto al carrito desde la página de detalle
    const handleAddToCartFromDetail = () => {
        if (quantity > 0) {
            addToCart(product, quantity); // Llama a la función addToCart
            // Abre el sidebar del carrito después de añadir el producto
            setIsCartOpen(true); // Llama a setIsCartOpen para abrir el sidebar
        } else {
            alert("La cantidad debe ser al menos 1.");
        }
    };


    return (
        <div className="product-detail-container">
            {/* ... (JSX para el botón Volver, breadcrumb, imagen, nombre, precio, selector de cantidad) ... */}
            <button className="back-to-list" onClick={onBack}>
                &lt; Volver
            </button>

            <div className="breadcrumb">
                Inicio / Tienda / {product.nombre}
            </div>

            <div className="product-main-info">
                <div className="product-image-section">
                    <div>
                        <div>
                            <img src={product.imagen} alt={product.nombre} />
                        </div>
                        <div >
                            <p>{product.descripcion}</p>
                        </div>
                    </div>
                </div>
                <div className="product-details-section">
                    <h2>{product.nombre}</h2>
                    {product.sku && <p className="sku">SKU: {product.sku}</p>}
                    <p className="price">{product.precio}</p>

                    {/* Select de talla o variante */}
                    <div className="product-option">
                        <label>Tamaño *</label>
                        <select defaultValue="">
                            <option value="" disabled>Elegir</option>
                            <option value="chico">Chico</option>
                            <option value="mediano">Mediano</option>
                            <option value="grande">Grande</option>
                        </select>
                    </div>

                    {/* Selector de cantidad */}
                    <div className="quantity-selector">
                        <label>Cantidad *</label>
                        <div className="quantity-input-group">
                            <button onClick={decrementQuantity}>−</button>
                            <input
                                type="number"
                                value={quantity}
                                onChange={handleQuantityChange}
                                min="1"
                            />
                            <button onClick={incrementQuantity}>+</button>
                        </div>
                    </div>

                    <button className="add-to-cart-btn" onClick={handleAddToCartFromDetail}>
                        Agregar al carrito
                    </button>

                    <div className="shipping-info">
                        <div className="collapsible-sections">
                            <div className="collapsible-section">
                                <div className="section-header" onClick={() => toggleSection('producto')}>
                                    <h3>INFORMACIÓN DEL PRODUCTO</h3>
                                    <span>{openSections.producto ? '−' : '+'}</span>
                                </div>
                                {!openSections.producto ? null : (
                                    <div className="section-content">
                                        <p>{product.informacionProducto}</p>
                                    </div>
                                )}
                            </div>
                            <div className="collapsible-section">
                                <div className="section-header" onClick={() => toggleSection('devolucion')}>
                                    <h3>POLÍTICA DE DEVOLUCIÓN Y REEMBOLSO</h3>
                                    <span>{openSections.devolucion ? '−' : '+'}</span>
                                </div>
                                {!openSections.devolucion ? null : (
                                    <div className="section-content">
                                        <p>{product.politicaDevolucion}</p>
                                    </div>
                                )}
                            </div>
                            <div className="collapsible-section">
                                <div className="section-header" onClick={() => toggleSection('envio')}>
                                    <h3>INFORMACIÓN DE ENVÍO</h3>
                                    <span>{openSections.envio ? '−' : '+'}</span>
                                </div>
                                {!openSections.envio ? null : (
                                    <div className="section-content">
                                        <p>{product.informacionEnvio}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* ... (JSX para las secciones colapsables) ... */}
            {/* <div className="collapsible-sections">
                <div className="collapsible-section">
                    <div className="section-header" onClick={() => toggleSection('producto')}>
                        <h3>INFORMACIÓN DEL PRODUCTO</h3>
                        <span>{openSections.producto ? '−' : '+'}</span>
                    </div>
                    {!openSections.producto ? null : (
                        <div className="section-content">
                            <p>{product.informacionProducto}</p>
                        </div>
                    )}
                </div>
                <div className="collapsible-section">
                    <div className="section-header" onClick={() => toggleSection('devolucion')}>
                        <h3>POLÍTICA DE DEVOLUCIÓN Y REEMBOLSO</h3>
                        <span>{openSections.devolucion ? '−' : '+'}</span>
                    </div>
                    {!openSections.devolucion ? null : (
                        <div className="section-content">
                            <p>{product.politicaDevolucion}</p>
                        </div>
                    )}
                </div>
                <div className="collapsible-section">
                    <div className="section-header" onClick={() => toggleSection('envio')}>
                        <h3>INFORMACIÓN DE ENVÍO</h3>
                        <span>{openSections.envio ? '−' : '+'}</span>
                    </div>
                    {!openSections.envio ? null : (
                        <div className="section-content">
                            <p>{product.informacionEnvio}</p>
                        </div>
                    )}
                </div>
            </div> */}


        </div>
    );
};

export default ProductDetail;