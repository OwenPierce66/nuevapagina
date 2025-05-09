import React, { useState, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./ScrollTop";
import Navbar from "./pages/navbar/Navbar";
import ChatWidget from "./pages/lesliSpa/chat/ChatWidget";

// Componentes cargados dinámicamente
// const Home = lazy(() => import("./pages/home/Home"));
const HellsVanity = lazy(() => import("./pages/hellsvanity/HellsVanity"));
const LesliSpa = lazy(() => import("./pages/lesliSpa/LesliSpa"));
const LesliTienda = lazy(() => import("./pages/lesliSpa/LesliTienda"));
const LesliTratamientos = lazy(() => import("./pages/lesliSpa/LesliTratamientos"));
const AcercaDe = lazy(() => import("./pages/lesliSpa/AcercaDe"));
const Contacto = lazy(() => import("./pages/lesliSpa/Contacto"));
const BookingPage = lazy(() => import("./pages/lesliSpa/BookingPage"));
const CartPage = lazy(() => import("./pages/lesliSpa/CartPage"));

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

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
    setIsCartOpen(true);
  };

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

  const removeItemFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  return (
    <Router>
      <ScrollToTop />
      <Navbar cartItemCount={cartItems.length} openCart={() => setIsCartOpen(true)} />
      <Suspense fallback={<div>Cargando...</div>}>
        <Routes>
          <Route path="/" element={<HellsVanity />} />
          <Route path="/home" element={<HellsVanity />} />
          <Route path="/hellsvanity" element={<HellsVanity />} />
          <Route path="/leslispa" element={<LesliSpa />} />
          <Route path="/leslispa/acercade" element={<AcercaDe />} />
          <Route path="/leslispa/tratamientos" element={<LesliTratamientos />} />
          <Route
            path="/leslispa/tienda"
            element={<LesliTienda
              addToCart={addToCart}
              cartItems={cartItems}
              isCartOpen={isCartOpen}
              setIsCartOpen={setIsCartOpen}
              updateItemQuantity={updateItemQuantity}
              removeItemFromCart={removeItemFromCart}
            />}
          />
          <Route path="/leslispa/contacto" element={<Contacto />} />
          <Route path="/leslispa/bookingpage" element={<BookingPage />} />
          <Route
            path="/leslispa/carrito"
            element={<CartPage
              cartItems={cartItems}
              onUpdateQuantity={updateItemQuantity}
              onRemoveItem={removeItemFromCart}
            />}
          />
        </Routes>
      </Suspense>
      <ChatWidget />
    </Router>
  );
}

export default App;