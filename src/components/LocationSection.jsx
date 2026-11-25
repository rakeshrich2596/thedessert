
import { motion } from "framer-motion";
import {
  MapPin,
  MessageCircle,
  Navigation,
  Clock,
  Phone,
} from "lucide-react";

import locationBackground from "../assets/location_background.png";

const address =
  "The Dessert Dairy, Metro Bike Parking Opposite, Todhunter Nagar, Saidapet, Chennai - 600015";

const mapQuery = encodeURIComponent(address);
const WHATSAPP = "919384220156";

export default function LocationSection() {
  return (
    <section
      id="location"
      className="scroll-mt-28 px-4 py-12 sm:px-6 lg:px-8 lg:py-16"
    >
      <div
        className="relative mx-auto min-h-[780px] max-w-[1500px] overflow-hidden rounded-[30px] bg-cover bg-center bg-no-repeat shadow-soft sm:min-h-[720px] lg:min-h-[620px]"
        style={{
          backgroundImage: `url(${locationBackground})`,
          backgroundPosition: "center",
        }}
      >
        {/* Subtle overlay for right-side readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#fff3e7]/10 to-[#fff3e7]/35" />

        {/* RIGHT SIDE CONTENT */}
        <div className="relative z-10 flex min-h-[780px] items-center justify-end px-5 py-10 sm:min-h-[720px] sm:px-10 lg:min-h-[620px] lg:px-12">

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-[590px] rounded-[28px] border border-white/60  p-6 shadow-xl backdrop-blur-[3px] sm:p-9 lg:mr-3 lg:bg-[#fff5e9]/65 lg:shadow-none lg:backdrop-blur-0"
          >

            {/* Heading */}
            <div className="text-center">

              <p className="mb-3 text-xs font-bold uppercase tracking-[.25em] text-dairy-caramel">
                Come Visit Us
              </p>

              <div className="flex items-center justify-center gap-3">

                <MapPin
                  size={34}
                  className="shrink-0 text-dairy-caramel"
                />

                <h2 className="font-display text-4xl font-bold text-dairy-brown sm:text-5xl">
                  Find Us Here
                </h2>

              </div>

              <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-dairy-brown sm:text-base">
                Visit The Dessert Dairy and treat yourself to
                your favourite desserts, snacks and refreshing sips!
              </p>

            </div>

            {/* Location Card */}
            <div className="mt-7 rounded-2xl border border-white/80 bg-white/75 p-5 shadow-soft">

              <div className="flex items-start gap-4">

                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-orange-100 text-dairy-caramel">
                  <MapPin size={24} />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-dairy-brown sm:text-xl">
                    The Dessert Dairy
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-dairy-brown/80">
                    Metro Bike Parking Opposite,
                    <br />
                    Todhunter Nagar,
                    <br />
                    Saidapet, Chennai – 600015.
                  </p>
                </div>

              </div>

              <div className="my-4 h-px bg-dairy-gold/40" />

              {/* Opening Hours */}
              <div className="flex items-center gap-3">

                <Clock
                  size={21}
                  className="shrink-0 text-dairy-caramel"
                />

                <div>
                  <p className="font-bold text-dairy-brown">
                    Opening Hours
                  </p>

                  <p className="mt-1 text-sm text-dairy-brown/75">
                    Daily · 5:00 PM – 10:00 PM
                  </p>
                </div>

              </div>

              {/* Contact */}
              <div className="mt-4 flex items-center gap-3">

                <Phone
                  size={21}
                  className="shrink-0 text-dairy-caramel"
                />

                <div>
                  <p className="font-bold text-dairy-brown">
                    Call / WhatsApp
                  </p>

                  <p className="mt-1 text-sm text-dairy-brown/75">
                    9384220156 · 8637439884
                  </p>
                </div>

              </div>

            </div>

            {/* Buttons */}
            <div className="mt-6 grid gap-3 sm:grid-cols-2">

              <a
                href={`https://wa.me/${WHATSAPP}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-full bg-dairy-brown px-4 py-4 text-sm font-bold text-white shadow-md transition duration-300 hover:-translate-y-1 hover:bg-dairy-caramel"
              >
                <MessageCircle size={19} />
                Order on WhatsApp
              </a>

              <a
                href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-full border-2 border-dairy-caramel bg-white/50 px-4 py-4 text-sm font-bold text-dairy-brown transition duration-300 hover:-translate-y-1 hover:bg-orange-100"
              >
                <Navigation size={19} />
                Get Directions
              </a>

            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
