import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MenuSection from "./components/MenuSection";
import WhyChooseUs from "./components/WhyChooseUs";
import LocationSection from "./components/LocationSection";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";
import CheckoutModal from "./components/CheckoutModal";

export default function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-hidden bg-dairy-cream text-dairy-brown">
      <Navbar onCartClick={() => setCartOpen(true)} />
      <main>
        <Hero onExplore={() => document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" })} />
        <MenuSection />
        <WhyChooseUs />
        <LocationSection />
      </main>
      <Footer />
      <AnimatePresence>
        {cartOpen && (
          <CartDrawer
            onClose={() => setCartOpen(false)}
            onCheckout={() => { setCartOpen(false); setCheckoutOpen(true); }}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {checkoutOpen && <CheckoutModal onClose={() => setCheckoutOpen(false)} />}
      </AnimatePresence>
    </div>
  );
}