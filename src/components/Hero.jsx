
import { motion } from "framer-motion";
import {
  ArrowRight,
  Heart,
  CupSoda,
  CakeSlice,
  Utensils,
  MessageCircle,
} from "lucide-react";

import heroBrownie from "../assets/hero-brownie.gif";
import jarCakes from "../assets/products/jar-cakes.jpg";
import waffles from "../assets/products/waffles.jpg";
import mojitos from "../assets/products/mojitos.jpg";

const WHATSAPP_NUMBER = "919384220156";

const products = [
  {
    image: jarCakes,
    name: "Jar Cakes",
    className: "product-card-one",
    rotate: 5,
  },
  {
    image: waffles,
    name: "Waffles",
    className: "product-card-two",
    rotate: -5,
  },
  {
    image: mojitos,
    name: "Mojitos",
    className: "product-card-three",
    rotate: 4,
  },
];

export default function Hero({ onExplore, onOrder }) {
  const handleOrder = () => {
    if (onOrder) {
      onOrder();
      return;
    }

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        "Hi The Dessert Dairy! I would like to place an order."
      )}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section
      id="home"
      className="dessert-hero relative isolate overflow-hidden"
    >
      {/* BACKGROUND DECORATIONS */}

      <div className="hero-bg-blur hero-bg-blur-one" />
      <div className="hero-bg-blur hero-bg-blur-two" />
      <div className="hero-leaf-decoration" />

      {/* FLOATING CHOCOLATE DECORATIONS */}

      <motion.div
        className="hero-chocolate-piece chocolate-piece-one"
        animate={{
          y: [0, 18, 0],
          rotate: [0, 25, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="hero-chocolate-piece chocolate-piece-two"
        animate={{
          y: [0, -18, 0],
          rotate: [0, -25, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* MAIN HERO CONTAINER */}

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-8 px-5 pb-24 pt-28 sm:px-8 lg:min-h-[720px] lg:grid-cols-[0.92fr_1.08fr] lg:gap-6 lg:px-10 lg:pb-28 lg:pt-32">

        {/* LEFT CONTENT */}

        <motion.div
          initial={{ opacity: 0, x: -35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-20 mx-auto w-full max-w-xl lg:mx-0"
        >
          <p className="mb-5 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-dairy-caramel sm:text-sm">
            A Little Joy in Every Bite
            <Heart size={21} />
          </p>

          <h1 className="max-w-xl font-display text-[42px] font-bold leading-[1.08] tracking-tight text-dairy-brown sm:text-5xl md:text-6xl xl:text-[64px]">
            Sweet Cravings,
            <br />

            <span className="italic text-dairy-caramel">
              Happy Moments.
            </span>
          </h1>

          <p className="mt-5 max-w-md text-base leading-7 text-dairy-brown/85 sm:text-lg sm:leading-8">
            Delicious desserts, tasty snacks and refreshing sips,
            all in one place.
          </p>

          {/* CTA BUTTONS */}

          <div className="mt-7 flex flex-wrap gap-3 sm:gap-4">

            <motion.button
              whileHover={{ y: -4, scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              onClick={onExplore}
              className="inline-flex items-center justify-center gap-3 rounded-full bg-dairy-brown px-6 py-3.5 text-sm font-bold text-white shadow-lg transition hover:bg-dairy-caramel sm:px-7 sm:py-4 sm:text-base"
            >
              Explore Our Menu
              <ArrowRight size={20} />
            </motion.button>

            <motion.button
              whileHover={{ y: -4, scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              onClick={handleOrder}
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-dairy-brown bg-white/80 px-6 py-3.5 text-sm font-bold text-dairy-brown shadow-md backdrop-blur-sm transition hover:bg-dairy-brown hover:text-white sm:px-7 sm:py-4 sm:text-base"
            >
              <MessageCircle size={19} />
              Order Now
            </motion.button>

          </div>

          {/* MINI FEATURES */}

          <div className="mt-9 flex max-w-md gap-2 sm:mt-11 sm:gap-4">

            <MiniFeature
              icon={<CakeSlice size={27} />}
              title={<>Freshly<br />Made</>}
            />

            <MiniFeature
              icon={<Utensils size={27} />}
              title={<>Desserts<br />& Snacks</>}
            />

            <MiniFeature
              icon={<CupSoda size={27} />}
              title={<>Refreshing<br />Sips</>}
            />

          </div>
        </motion.div>

        {/* RIGHT SIDE IMAGE AREA */}

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="relative mx-auto mt-5 w-full max-w-[610px] lg:mt-0"
        >

          {/* BROWN DECORATIVE SHAPE */}

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="hero-brown-shape"
          />

          {/* MAIN BROWNIE IMAGE */}

          <motion.div
            className="relative z-10 w-[77%]"
            animate={{ y: [0, -9, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <img
              src={heroBrownie}
              alt="Delicious chocolate brownies with chocolate sauce"
              className="hero-brownie-image w-full"
            />
          </motion.div>

          {/* FLOATING PRODUCT CARDS */}

          <div className="absolute right-0 top-0 z-20 h-full w-[29%]">

            {products.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{
                  opacity: 0,
                  x: 35,
                  rotate: 0,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  rotate: product.rotate,
                  y: [0, -7, 0],
                }}
                transition={{
                  opacity: {
                    delay: 0.4 + index * 0.2,
                    duration: 0.6,
                  },
                  x: {
                    delay: 0.4 + index * 0.2,
                    duration: 0.6,
                  },
                  rotate: {
                    delay: 0.4 + index * 0.2,
                    duration: 0.6,
                  },
                  y: {
                    delay: 1 + index * 0.3,
                    duration: 3 + index,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
                className={`absolute w-full rounded-[20px] border-4 border-white bg-white p-1.5 shadow-[0_12px_30px_rgba(65,30,15,0.18)] sm:rounded-[25px] sm:p-2 ${product.className}`}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="aspect-square w-full rounded-[14px] object-cover sm:rounded-[19px]"
                />

                <p className="absolute bottom-2 right-1 rounded-full bg-[#fff0d5] px-2.5 py-1 text-[9px] font-bold text-dairy-brown sm:bottom-3 sm:right-2 sm:px-3 sm:py-1.5 sm:text-xs">
                  {product.name}
                </p>
              </motion.div>
            ))}

          </div>

          {/* FLOATING SPARKLES */}

          <motion.span
            animate={{
              rotate: [0, 20, -20, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="absolute -left-2 top-2 z-20 text-4xl text-dairy-caramel sm:text-5xl"
          >
            ✳
          </motion.span>

          <motion.span
            animate={{
              y: [0, -12, 0],
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            className="absolute bottom-4 left-10 z-20 text-3xl text-dairy-caramel sm:text-4xl"
          >
            ♡
          </motion.span>

        </motion.div>
      </div>

      {/* BOTTOM ORGANIC WAVES */}

      <div className="pointer-events-none absolute bottom-0 left-0 z-0 w-full">
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="h-[65px] w-full sm:h-[90px]"
          fill="none"
        >
          <path
            d="M0 65 C100 110 170 30 280 65 S450 115 570 60 S770 20 900 70 S1100 110 1230 55 S1370 25 1440 60 V120 H0 Z"
            fill="#D9A071"
            opacity="0.3"
          />

          <path
            d="M0 85 C120 120 180 55 310 85 S490 115 620 80 S800 40 940 85 S1120 115 1260 75 S1380 50 1440 80 V120 H0 Z"
            fill="#7A351D"
            opacity="0.9"
          />
        </svg>
      </div>

    </section>
  );
}

function MiniFeature({ icon, title }) {
  return (
    <div className="flex flex-1 flex-col items-center gap-2 border-r border-dairy-caramel/40 px-2 text-center last:border-0">
      <span className="text-dairy-chocolate">
        {icon}
      </span>

      <span className="text-xs font-medium leading-5 text-dairy-brown sm:text-sm">
        {title}
      </span>
    </div>
  );
}
