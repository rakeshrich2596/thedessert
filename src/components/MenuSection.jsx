
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShoppingCart,
  Plus,
  Minus,
  LayoutGrid,
  CakeSlice,
  Popcorn,
  CupSoda,
} from "lucide-react";

import { products } from "../data/products";
import { useCart } from "../context/CartContext";

const categories = [
  { name: "All Menu", icon: LayoutGrid },
  { name: "Desserts", icon: CakeSlice },
  { name: "Snacks", icon: Popcorn },
  { name: "Drinks", icon: CupSoda },
];

export default function MenuSection() {
  const [active, setActive] = useState("All Menu");
  const [quantities, setQuantities] = useState({});

  const { cart, addToCart, changeQuantity } = useCart();

  const visibleProducts = useMemo(() => {
    return active === "All Menu"
      ? products
      : products.filter((product) => product.category === active);
  }, [active]);

  const updateQuantity = (product, inCart, value) => {
    if (inCart) {
      const difference = value - inCart.quantity;

      if (difference !== 0) {
        changeQuantity(product.id, difference);
      }
    } else {
      setQuantities((prev) => ({
        ...prev,
        [product.id]: Math.max(1, value),
      }));
    }
  };

  const handleAddToCart = (product, inCart) => {
    const quantity = quantities[product.id] || 1;

    if (inCart) {
      addToCart(product);
    } else {
      for (let i = 0; i < quantity; i++) {
        addToCart(product);
      }

      setQuantities((prev) => ({
        ...prev,
        [product.id]: 1,
      }));
    }
  };

  return (
    <section
      id="menu"
      className="relative scroll-mt-24 overflow-hidden px-4 py-16 sm:px-6 lg:px-8"
    >
      {/* Decorative Background */}
      <div className="pointer-events-none absolute -left-20 top-20 h-64 w-64 rounded-full bg-orange-200/20 blur-3xl" />

      <div className="pointer-events-none absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-dairy-gold/20 blur-3xl" />

      <div className="relative mx-auto max-w-[1500px]">

        {/* SECTION HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 text-center sm:mb-10"
        >
          <p className="mb-2 text-xs font-bold uppercase tracking-[.25em] text-dairy-caramel">
            Made for your cravings
          </p>

          <h2 className="font-display text-4xl font-bold text-dairy-brown sm:text-5xl">
            Explore Our Menu
          </h2>

          <p className="mt-3 text-sm text-dairy-brown/75 sm:text-base">
            Delicious desserts, tasty snacks and refreshing sips.
          </p>
        </motion.div>

        {/* CATEGORY FILTERS */}
        <div className="mb-10 flex flex-wrap justify-center gap-2 sm:gap-4">
          {categories.map((category) => {
            const Icon = category.icon;
            const isActive = active === category.name;

            return (
              <motion.button
                key={category.name}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => setActive(category.name)}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-xs font-semibold transition-all sm:px-6 sm:py-3 sm:text-sm ${
                  isActive
                    ? "border-dairy-brown bg-dairy-brown text-white shadow-lg"
                    : "border-dairy-caramel/50 bg-white/70 text-dairy-brown hover:bg-white"
                }`}
              >
                <Icon size={18} />
                {category.name}
              </motion.button>
            );
          })}
        </div>

        {/* PRODUCT GRID */}
        <motion.div
          layout
          className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 xl:grid-cols-6 xl:gap-3"
        >
          <AnimatePresence mode="popLayout">
            {visibleProducts.map((product, index) => {
              const inCart = cart.find(
                (item) => item.id === product.id
              );

              const quantity =
                inCart?.quantity || quantities[product.id] || 1;

              return (
                <motion.article
                  layout
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{
                    duration: 0.35,
                    delay: index * 0.035,
                  }}
                  className="group overflow-hidden rounded-[20px] border border-orange-100 bg-white/85 shadow-[0_5px_12px_rgba(110,55,20,0.10)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(110,55,20,0.16)] sm:rounded-[23px]"
                >
                  {/* PRODUCT IMAGE */}
                  <div className="overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      className="aspect-[1.5/1] w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* PRODUCT DETAILS */}
                  <div className="p-2.5 sm:p-3">

                    <h3 className="truncate text-sm font-bold text-dairy-brown sm:text-base">
                      {product.name}
                    </h3>

                    <p className="mt-0.5 text-sm font-bold text-dairy-caramel sm:text-base">
                      ₹{product.price}
                    </p>

                    {/* QUANTITY + ADD TO CART */}
                    <div className="mt-2 flex items-center gap-1.5">

                      {/* QUANTITY CONTROL */}
                      <div className="flex h-8 shrink-0 items-center justify-between gap-2 rounded-full bg-[#FCE9CF] px-2 sm:gap-2.5">
                        <button
                          onClick={() =>
                            updateQuantity(
                              product,
                              inCart,
                              quantity - 1
                            )
                          }
                          disabled={!inCart && quantity <= 1}
                          aria-label={`Decrease ${product.name}`}
                          className="text-dairy-brown transition hover:text-dairy-caramel disabled:opacity-40"
                        >
                          <Minus size={13} />
                        </button>

                        <span className="min-w-3 text-center text-xs font-bold text-dairy-brown">
                          {quantity}
                        </span>

                        <button
                          onClick={() =>
                            updateQuantity(
                              product,
                              inCart,
                              quantity + 1
                            )
                          }
                          aria-label={`Increase ${product.name}`}
                          className="text-dairy-brown transition hover:text-dairy-caramel"
                        >
                          <Plus size={13} />
                        </button>
                      </div>

                      {/* ADD TO CART BUTTON */}
                      <motion.button
                        whileTap={{ scale: 0.93 }}
                        onClick={() =>
                          handleAddToCart(product, inCart)
                        }
                        className="flex h-8 min-w-0 flex-1 items-center justify-center gap-1 rounded-full bg-dairy-brown px-2 text-[10px] font-semibold text-white transition-colors hover:bg-dairy-caramel sm:text-[11px]"
                      >
                        <ShoppingCart size={13} className="shrink-0" />
                        <span className="truncate">Add to Cart</span>
                      </motion.button>

                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
