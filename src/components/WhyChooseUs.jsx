
import { motion } from "framer-motion";
import {
  ChefHat,
  CakeSlice,
  MessageCircle,
  MapPin,
  Heart,
} from "lucide-react";

import whyBackground from "../assets/why_background.png";

const features = [
  {
    icon: ChefHat,
    title: "Freshly Made",
    text: "Prepared fresh with quality ingredients.",
  },
  {
    icon: CakeSlice,
    title: "Wide Variety",
    text: "Delicious desserts, tasty snacks and refreshing sips.",
  },
  {
    icon: MessageCircle,
    title: "Easy Ordering",
    text: "Pick your favourites and order instantly on WhatsApp.",
  },
  {
    icon: MapPin,
    title: "Local & Trusted",
    text: "Your favourite spot in Saidapet, Chennai.",
  },
];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: index * 0.15,
      ease: "easeOut",
    },
  }),
};

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="relative isolate overflow-hidden scroll-mt-28"
      style={{
        backgroundImage: `url(${whyBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Soft Background Overlay */}
      <div className="absolute inset-0 -z-10 bg-[#fff5e9]/10" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 pb-32 pt-48 sm:px-8 sm:pt-52 lg:pb-36 lg:pt-48">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="text-3xl text-dairy-caramel">〃</span>

            <p className="text-xs font-bold uppercase tracking-[.25em] text-dairy-caramel sm:text-sm">
              A Little Extra Love
            </p>

            <span className="text-3xl text-dairy-caramel">〃</span>
          </div>

          <h2 className="font-display text-4xl font-bold leading-tight text-dairy-brown sm:text-5xl lg:text-7xl">
            Why{" "}
            <span className="italic text-dairy-caramel">
              Choose
            </span>{" "}
            Us?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-dairy-brown sm:text-lg">
            Because every bite at The Dessert Dairy is made with
            care, quality and a whole lot of love.
          </p>

          <motion.div
            animate={{
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
            }}
            className="mt-5 flex justify-center text-dairy-caramel"
          >
            <Heart size={34} strokeWidth={1.8} />
          </motion.div>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 gap-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">

          {features.map(({ icon: Icon, title, text }, index) => (
            <motion.div
              key={title}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.2,
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="group relative flex min-h-[270px] flex-col items-center justify-center rounded-[35px] border-2 border-white/90 bg-[#fff8ee]/75 px-5 pb-8 pt-16 text-center shadow-[0_12px_25px_rgba(101,48,19,0.13)] backdrop-blur-md transition-all duration-300 hover:bg-white/90 hover:shadow-[0_18px_35px_rgba(101,48,19,0.2)]"
            >
              {/* Icon Badge */}
              <motion.div
                whileHover={{
                  rotate: [0, -8, 8, 0],
                  scale: 1.1,
                }}
                className="absolute -top-11 grid h-28 w-28 place-items-center rounded-full border-4 border-[#fff5e9] bg-gradient-to-br from-[#ffe4c8] to-[#f8d6b5] shadow-[0_6px_15px_rgba(101,48,19,0.15)]"
              >
                <Icon
                  size={52}
                  strokeWidth={1.7}
                  className="text-dairy-brown"
                />
              </motion.div>

              {/* Card Content */}
              <h3 className="mt-5 font-display text-xl font-bold text-dairy-brown sm:text-2xl">
                {title}
              </h3>

              <div className="my-4 h-1 w-20 rounded-full bg-dairy-gold transition-all duration-300 group-hover:w-28" />

              <p className="max-w-[240px] text-base leading-7 text-dairy-brown/90">
                {text}
              </p>

              <Heart
                size={18}
                className="absolute bottom-4 right-5 text-dairy-caramel/40"
              />
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
