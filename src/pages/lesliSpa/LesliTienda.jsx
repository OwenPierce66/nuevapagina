import React, { useState } from 'react';
import './LesliTienda.scss';

// Importa imágenes (mantén tus importaciones de imágenes)
import cremaCorporal from '../../images/cremaCorporal.png';
import aceitemasajes from '../../images/aceitemasajes.png';
import cremamanos from '../../images/cremamanos.png';
import velaperfumadora from '../../images/velaperfumadora.png';

import PiePaginaLesli from './PiePaginaLesli';
import NavbarLesli from "./NavbarLesli"; // Navbar probablemente no necesita recibir props del carrito aquí ahora, sino en App.jsx

// Importa el componente Carousel y sus estilos
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

// Importa los componentes de detalle de producto y el sidebar del carrito
import ProductDetail from './ProductDetail';
import CartSidebar from './CartSidebar';


// Datos de productos (mantén tus datos)
const productos = [
    { id: 1, nombre: "Crema corporal", precio: "$95.00", imagen: cremaCorporal, sku: "SKU 0001", descripcion: "Descripción del producto. Lugar ideal para agregar más detalles sobre tu producto como su tamaño, materiales, instrucciones de uso y mantenimiento.", informacionProducto: "Detalle del producto. Lugar ideal para agregar más información sobre tu producto como su tamaño, materiales, instrucciones de uso y mantenimiento. También es un buen espacio para explicar lo especial que es tu producto y sus beneficios.", politicaDevolucion: "Política de devolución y reembolso. Lugar ideal para explicar a tus clientes qué hacer si no están satisfechos con su compra. Tener una política de reembolso o cambio clara es una gran manera de generar confianza y garantizar que tus clientes compren con seguridad.", informacionEnvio: "Política de envío. Lugar ideal para agregar más información sobre tus métodos de envío, empaquetado y costos. Brindar información clara sobre tu política de envío es una gran manera de generar confianza y garantizar que tus clientes compren con seguridad." },
    { id: 2, nombre: "Aceite para masajes", precio: "$65.00", imagen: aceitemasajes, sku: "SKU 0002", descripcion: "Descripción del producto. Lugar ideal para agregar más detalles sobre tu producto como su tamaño, materiales, instrucciones de uso y mantenimiento.", informacionProducto: "Detalle del producto. Lugar ideal para agregar más información sobre tu producto como su tamaño, materiales, instrucciones de uso y mantenimiento. También es un buen espacio para explicar lo especial que es tu producto y sus beneficios.", politicaDevolucion: "Política de devolución y reembolso. Lugar ideal para explicar a tus clientes qué hacer si no están satisfechos con su compra. Tener una política de reembolso o cambio clara es una gran manera de generar confianza y garantizar que tus clientes compren con seguridad.", informacionEnvio: "Política de envío. Lugar ideal para agregar más información sobre tus métodos de envío, empaquetado y costos. Brindar información clara sobre tu política de envío es una gran manera de generar confianza y garantizar que tus clientes compren con seguridad." },
    { id: 3, nombre: "Crema de manos", precio: "$55.00", imagen: cremamanos, destacado: true, sku: "SKU 0003", descripcion: "Descripción del producto. Lugar ideal para agregar más detalles sobre tu producto como su tamaño, materiales, instrucciones de uso y mantenimiento.", informacionProducto: "Detalle del producto. Lugar ideal para agregar más información sobre tu producto como su tamaño, materiales, instrucciones de uso y mantenimiento. También es un buen espacio para explicar lo especial que es tu producto y sus beneficios.", politicaDevolucion: "Política de devolución y reembolso. Lugar ideal para explicar a tus clientes qué hacer si no están satisfechos con su compra. Tener una política de reembolso o cambio clara es una gran manera de generar confianza y garantizar que tus clientes compren con seguridad.", informacionEnvio: "Política de envío. Lugar ideal para agregar más información sobre tus métodos de envío, empaquetado y costos. Brindar información clara sobre tu política de envío es una gran manera de generar confianza y garantizar que tus clientes compren con seguridad." },
    { id: 4, nombre: "Vela perfumada", precio: "$55.00", imagen: velaperfumadora, sku: "SKU 0004", descripcion: "Descripción del producto. Lugar ideal para agregar más detalles sobre tu producto como su tamaño, materiales, instrucciones de uso y mantenimiento.", informacionProducto: "Detalle del producto. Lugar ideal para agregar más información sobre tu producto como su tamaño, materiales, instrucciones de uso y mantenimiento. También es un buen espacio para explicar lo especial que es tu producto y sus beneficios.", politicaDevolucion: "Política de devolución y reembolso. Lugar ideal para explicar a tus clientes qué hacer si no están satisfechos con su compra. Tener una política de reembolso o cambio clara es una gran manera de generar confianza y garantizar que tus clientes compren con seguridad.", informacionEnvio: "Política de envío. Lugar ideal para agregar más información sobre tus métodos de envío, empaquetado y costos. Brindar información clara sobre tu política de envío es una gran manera de generar confianza y garantizar que tus clientes compren con seguridad." }
];


// Define cómo se comportará el carrusel (mantén tu responsive)
const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3, slidesToSlide: 1 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2, slidesToSlide: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1, slidesToSlide: 1 }
};

// Recibe las props del carrito desde App.jsx
const LesliTienda = ({ addToCart, cartItems, isCartOpen, setIsCartOpen, updateItemQuantity, removeItemFromCart }) => {
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleProductClick = (product) => {
        setSelectedProduct(product);
    };

    const handleBackToList = () => {
        setSelectedProduct(null);
    };

    // Handler para añadir producto al carrito desde la lista del carrusel
    const handleAddToCartFromList = (product, event) => {
        event.stopPropagation();
        addToCart(product); // Llama a la función addToCart recibida por prop
    };


    return (
        <div>
            {/* Navbar ya no recibe props del carrito aquí si se gestiona en App.jsx */}
            {/* Pero Navbar debe ser renderizado en App.jsx si maneja el ícono del carrito */}
            {/* <div><NavbarLesli /></div> */}


            {selectedProduct ? (
                // Pasa addToCart y setIsCartOpen al componente de detalle
                <ProductDetail
                    product={selectedProduct}
                    onBack={handleBackToList}
                    addToCart={addToCart} // Pasa addToCart
                    setIsCartOpen={setIsCartOpen} // Pasa setIsCartOpen
                />
            ) : (
                // Muestra la vista de lista
                <div className="tienda-container">
                    <section className="tienda-intro">
                        <h2>PRODUCTOS SERENIDAD</h2>
                        <p>Párrafo. Haz clic para editar y agregar tu propio texto. Es fácil. Haz clic en "Editar texto" o doble clic aquí para agregar tu contenido y cambiar la fuente. Puedes arrastrar y soltar este texto donde quieras en tu página. En este espacio puedes contar tu historia y permitir a los usuarios saber más sobre ti.</p>
                        <p>Este es un gran espacio para escribir un texto largo sobre tu empresa y servicios. Puedes usar este espacio para entrar en más de detalle sobre tu empresa. Habla de tu equipo y los servicios que ofreces. Cuenta a los visitantes la historia de cómo se te ocurrió la idea de tu negocio y qué te diferencia de tus competidores. Haz que tu empresa se destaque y muestra a los visitantes quién eres.</p>
                    </section>

                    <Carousel responsive={responsive}>
                        {productos.map((prod) => (
                            <div
                                className="producto"
                                key={prod.id}
                                onClick={() => handleProductClick(prod)}
                                style={{ cursor: 'pointer' }}
                            >
                                {prod.destacado && <span className="destacado">Más vendido</span>}
                                <img src={prod.imagen} alt={prod.nombre} />
                                <div className="titulo-productos">{prod.nombre}</div>
                                <div className="precio">{prod.precio}</div>
                                {/* Botón Agregar al carrito en la lista */}
                                <button
                                    className="btn-carrito"
                                    onClick={(e) => handleAddToCartFromList(prod, e)}
                                >
                                    Agregar al carrito
                                </button>
                            </div>
                        ))}
                    </Carousel>
                </div>
            )}

            {/* Renderiza el sidebar del carrito, pasándole las props recibidas de App.jsx */}
            <CartSidebar
                isOpen={isCartOpen}
                onClose={() => setIsCartOpen(false)} // Llama a la función de App.jsx para cerrar
                cartItems={cartItems}
                onUpdateQuantity={updateItemQuantity} // Pasa updateItemQuantity
                onRemoveItem={removeItemFromCart} // Pasa removeItemFromCart
            />

            <PiePaginaLesli />
        </div>
    );
};

export default LesliTienda;