import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState } from 'react'; // Importa useState

// Componentes principales
import Home from "./pages/home/Home";
import HellsVanity from "./pages/hellsvanity/HellsVanity";
import Navbar from "./pages/navbar/Navbar";
import LesliSpa from "./pages/lesliSpa/LesliSpa";
import LesliInstalaciones from "./pages/lesliSpa/lesliInstalaciones";
import ScrollToTop from "./ScrollTop";
import LesliTienda from "./pages/lesliSpa/LesliTienda";
import LesliTratamientos from "./pages/lesliSpa/LesliTratamientos";
import AcercaDe from "./pages/lesliSpa/AcercaDe";
import Contacto from "./pages/lesliSpa/Contacto";
import ChatWidget from "./pages/lesliSpa/chat/ChatWidget";
import BookingPage from "./pages/lesliSpa/BookingPage";
// Importa el nuevo componente de la página del carrito
import CartPage from "./pages/lesliSpa/CartPage"; // Asegúrate de la ruta correcta


function App() {
  // Estado para los productos en el carrito (gestionado globalmente aquí)
  const [cartItems, setCartItems] = useState([]);
  // Estado para controlar si el sidebar del carrito está abierto (gestionado globalmente aquí)
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Función para añadir un producto al carrito
  const addToCart = (product, quantity = 1) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);

      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity }];
      }
    });
    // Abre el sidebar del carrito automáticamente al añadir un producto
    setIsCartOpen(true);
  };

  // Función para actualizar la cantidad de un producto en el carrito
  const updateItemQuantity = (productId, newQuantity) => {
    setCartItems(prevItems => {
      const quantityToUse = Math.max(0, newQuantity);

      if (quantityToUse === 0) {
        return prevItems.filter(item => item.id !== productId);
      } else {
        return prevItems.map(item =>
          item.id === productId ? { ...item, quantity: quantityToUse } : item
        );
      }
    });
  };

  // Función para remover un producto del carrito
  const removeItemFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };


  return (
    <Router>
      <ScrollToTop />
      {/* Pasa el estado y la función para abrir el sidebar al Navbar */}
      <Navbar cartItemCount={cartItems.length} openCart={() => setIsCartOpen(true)} /> {/* Asegúrate de que Navbar acepte estas props */}
      <Routes>
        <Route path="/" element={<HellsVanity />} />
        <Route path="/home" element={<Home />} />
        <Route path="/hellsvanity" element={<HellsVanity />} />
        <Route path="/leslispa" element={<LesliSpa />} />
        <Route path="/leslispa/acercade" element={<AcercaDe />} />
        <Route path="/leslispa/instalaciones" element={<LesliInstalaciones />} />
        <Route path="/leslispa/tratamientos" element={<LesliTratamientos />} />
        {/* Pasa las funciones y estado del carrito a LesliTienda */}
        <Route
          path="/leslispa/tienda"
          element={<LesliTienda
            addToCart={addToCart}
            cartItems={cartItems} // También pasa cartItems y funciones a LesliTienda para el sidebar
            isCartOpen={isCartOpen}
            setIsCartOpen={setIsCartOpen}
            updateItemQuantity={updateItemQuantity}
            removeItemFromCart={removeItemFromCart}
          />}
        />
        <Route path="/leslispa/contacto" element={<Contacto />} />
        <Route path="/leslispa/bookingpage" element={<BookingPage />} />

        {/* Nueva ruta para la página del carrito */}
        <Route
          path="/leslispa/carrito"
          element={<CartPage
            cartItems={cartItems} // Pasa los items del carrito a la página del carrito
            onUpdateQuantity={updateItemQuantity} // Pasa las funciones de modificación
            onRemoveItem={removeItemFromCart}
          />}
        />

      </Routes>
      <ChatWidget />
    </Router>
  );
}

export default App;