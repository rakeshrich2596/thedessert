
import { useState } from "react";
import { Menu, X, ShoppingCart, MessageCircle } from "lucide-react";
import { useCart } from "../context/CartContext";

const WHATSAPP = "919384220156";

export default function Navbar({ onCartClick }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { itemCount } = useCart();

  const links = [
    { label: "Home", href: "#home" },
    { label: "Menu", href: "#menu" },
    { label: "Why Us", href: "#why-us" },
    { label: "Location", href: "#location" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6">
      <nav className="mx-auto flex h-[82px] max-w-7xl items-center justify-between rounded-full bg-white px-4 shadow-soft sm:h-[92px] sm:px-7">

        {/* LOGO */}
        <a
          href="#home"
          className="flex h-full shrink-0 items-center"
        >
          <img
            src="/logo.jpg"
            alt="The Dessert Dairy"
            className="h-[66px] w-[66px] object-contain sm:h-[78px] sm:w-[78px]"
          />
        </a>

        {/* BRAND TEXT */}
        <span className="hidden text-xs font-semibold tracking-wide text-dairy-brown md:block lg:text-sm">
          Desserts • Snacks • Sips
        </span>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="nav-link"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* ACTION BUTTONS */}
        <div className="flex items-center gap-2">

          <button
            onClick={onCartClick}
            aria-label="Open cart"
            className="relative rounded-full p-3 transition hover:bg-dairy-cream"
          >
            <ShoppingCart size={22} />

            {itemCount > 0 && (
              <span className="absolute right-0 top-0 grid h-5 min-w-5 place-items-center rounded-full bg-dairy-chocolate px-1 text-[10px] font-bold text-white">
                {itemCount}
              </span>
            )}
          </button>

          <a
            href={`https://wa.me/${WHATSAPP}`}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-full bg-dairy-brown px-5 py-3 text-sm font-semibold text-white transition hover:bg-dairy-caramel sm:flex"
          >
            <MessageCircle size={17} />
            WhatsApp
          </a>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-full p-3 hover:bg-dairy-cream lg:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="mx-3 mt-2 rounded-3xl bg-white p-5 shadow-soft lg:hidden">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block rounded-xl px-3 py-3 font-semibold text-dairy-brown hover:bg-dairy-cream"
            >
              {link.label}
            </a>
          ))}

          <a
            href={`https://wa.me/${WHATSAPP}`}
            target="_blank"
            rel="noreferrer"
            className="mt-2 flex items-center justify-center gap-2 rounded-full bg-dairy-brown px-4 py-3 font-semibold text-white"
          >
            <MessageCircle size={18} />
            Order on WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}


