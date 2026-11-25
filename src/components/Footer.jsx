
import {
  Instagram,
  MessageCircle,
  MapPin,
  Clock,
  Phone,
  ArrowUpRight,
  Heart,
  ArrowUp,
  CakeSlice,
} from "lucide-react";

const WHATSAPP = "919384220156";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "Our Menu", href: "#menu" },
  { name: "Why Choose Us", href: "#why-us" },
  { name: "Find Us", href: "#location" },
];

const menuItems = [
  "Brownies",
  "Jar Cakes",
  "Tresleches",
  "Waffles",
  "Sandwich",
  "Chicken Momos",
  "Loaded Fries",
  "Mojitos",
];

export default function Footer() {
  return (
    <footer className="relative mt-16 overflow-hidden bg-gradient-to-br from-[#54200f] via-[#401709] to-[#281006] px-5 pb-6 pt-14 text-white sm:px-8">

      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-orange-400/10 blur-[100px]" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-amber-500/10 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* TOP BRAND MESSAGE */}
        <div className="mb-12 flex flex-col items-center justify-between gap-6 border-b border-white/15 pb-10 text-center md:flex-row md:text-left">

          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <img
              src="/logo.jpg"
              alt="The Dessert Dairy"
              className="h-24 w-24 rounded-full bg-white p-1 object-contain shadow-xl"
            />

            <div>
              <h2 className="font-display text-3xl font-bold tracking-wide text-[#ffe4bd]">
                The Dessert Dairy
              </h2>
              <p className="mt-2 text-sm tracking-wider text-white/65">
                Desserts • Snacks • Sips
              </p>
              <p className="mt-2 text-sm italic text-orange-200/80">
                A little joy in every bite.
              </p>
            </div>
          </div>

          <a
            href="#menu"
            className="inline-flex items-center gap-2 rounded-full bg-[#f2c17d] px-6 py-3 font-bold text-[#54200f] shadow-lg transition hover:-translate-y-1 hover:bg-white"
          >
            Explore Our Menu
            <ArrowUpRight size={18} />
          </a>

        </div>

        {/* MAIN FOOTER GRID */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">

          {/* ABOUT */}
          <div>
            <div className="mb-5 flex items-center gap-2">
              <Heart size={19} className="text-orange-300" />
              <h3 className="text-lg font-bold text-[#ffe4bd]">
                About Us
              </h3>
            </div>

            <p className="max-w-xs text-sm leading-7 text-white/70">
              Welcome to The Dessert Dairy! Enjoy delicious desserts,
              tasty snacks and refreshing drinks, made to make
              your everyday moments sweeter.
            </p>

            <div className="mt-6 flex gap-3">

              <a
                href="https://www.instagram.com/the_dessert_dairy_world/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-white/10 transition hover:-translate-y-1 hover:bg-[#f2c17d] hover:text-[#54200f]"
              >
                <Instagram size={20} />
              </a>

              <a
                href={`https://wa.me/${WHATSAPP}`}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-white/10 transition hover:-translate-y-1 hover:bg-[#f2c17d] hover:text-[#54200f]"
              >
                <MessageCircle size={20} />
              </a>

            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="mb-6 text-lg font-bold text-[#ffe4bd]">
              Quick Links
            </h3>

            <ul className="flex flex-col gap-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-white/70 transition hover:translate-x-1 hover:text-orange-200"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-orange-300 transition group-hover:scale-150" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* OUR MENU */}
          <div>
            <div className="mb-6 flex items-center gap-2">
              <CakeSlice size={19} className="text-orange-300" />
              <h3 className="text-lg font-bold text-[#ffe4bd]">
                Our Menu
              </h3>
            </div>

            <ul className="grid grid-cols-2 gap-x-3 gap-y-4">
              {menuItems.map((item) => (
                <li key={item}>
                  <a
                    href="#menu"
                    className="text-sm text-white/70 transition hover:text-orange-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="mb-6 text-lg font-bold text-[#ffe4bd]">
              Get In Touch
            </h3>

            <div className="flex flex-col gap-5">

              <a
                href={`https://wa.me/${WHATSAPP}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-3 text-sm text-white/75 transition hover:text-orange-200"
              >
                <Phone size={19} className="mt-1 shrink-0 text-orange-300" />
                <span>
                  <span className="block font-semibold text-white">
                    Call / WhatsApp
                  </span>
                  9384220156
                  <br />
                  8637439884
                </span>
              </a>

              <div className="flex items-start gap-3 text-sm text-white/75">
                <Clock size={19} className="mt-1 shrink-0 text-orange-300" />
                <span>
                  <span className="block font-semibold text-white">
                    Opening Hours
                  </span>
                  Daily · 5:00 PM – 10:00 PM
                </span>
              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=The+Dessert+Dairy+Todhunter+Nagar+Saidapet+Chennai"
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-3 text-sm text-white/75 transition hover:text-orange-200"
              >
                <MapPin size={19} className="mt-1 shrink-0 text-orange-300" />
                <span>
                  <span className="block font-semibold text-white">
                    Our Location
                  </span>
                  Metro Bike Parking Opposite,
                  Todhunter Nagar,
                  Saidapet, Chennai – 600015
                </span>
              </a>

            </div>
          </div>

        </div>

        {/* INSTAGRAM CTA */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 rounded-2xl border border-white/15 bg-white/[0.07] px-6 py-5 text-center sm:flex-row sm:text-left">

          <div>
            <h3 className="font-display text-xl font-bold text-[#ffe4bd]">
              Follow Our Sweet Journey!
            </h3>
            <p className="mt-1 text-sm text-white/65">
              Discover our latest desserts, snacks and special treats.
            </p>
          </div>

          <a
            href="https://www.instagram.com/the_dessert_dairy_world/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#f2c17d] px-5 py-3 text-sm font-bold text-[#54200f] transition hover:-translate-y-1 hover:bg-white"
          >
            <Instagram size={18} />
            Follow on Instagram
            <ArrowUpRight size={16} />
          </a>

        </div>

        {/* COPYRIGHT */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/15 pt-6 text-center sm:flex-row">

          <p className="text-xs text-white/55">
            © {new Date().getFullYear()} The Dessert Dairy. All Rights Reserved.
          </p>

          <p className="flex items-center gap-1.5 text-xs text-white/55">
            Made with
            <Heart size={13} className="fill-orange-300 text-orange-300" />
            for dessert lovers.
          </p>

          <a
            href="#home"
            aria-label="Back to top"
            className="grid h-9 w-9 place-items-center rounded-full border border-white/20 transition hover:bg-[#f2c17d] hover:text-[#54200f]"
          >
            <ArrowUp size={17} />
          </a>

        </div>

      </div>
    </footer>
  );
}
