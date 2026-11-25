import { motion } from "framer-motion";
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function CartDrawer({ onClose, onCheckout }) {
  const { cart, changeQuantity, removeFromCart, subtotal, itemCount } = useCart();

  return (
    <motion.div className="fixed inset-0 z-50 flex justify-end bg-black/45 backdrop-blur-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      <motion.aside initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", damping: 28 }} onClick={(e) => e.stopPropagation()} className="flex h-full w-full max-w-xl flex-col bg-dairy-paper p-5 shadow-2xl sm:p-8">
        <div className="mb-7 flex items-center justify-between">
          <div><p className="text-sm text-dairy-caramel">Your favourites</p><h2 className="text-3xl font-bold">Your Cart</h2><p className="mt-1 text-sm text-dairy-brown/65">{itemCount} items in your cart</p></div>
          <button onClick={onClose} className="rounded-full bg-dairy-brown p-3 text-white hover:bg-dairy-caramel" aria-label="Close cart"><X /></button>
        </div>
        <div className="flex-1 space-y-4 overflow-y-auto pr-1">
          {cart.length === 0 ? <div className="grid h-full place-items-center text-center"><div><ShoppingBag className="mx-auto mb-4 text-dairy-caramel" size={48} /><h3 className="text-xl font-bold">Your cart is empty</h3><p className="mt-2 text-sm text-dairy-brown/65">Explore our menu and add your favourites.</p></div></div> : cart.map((item) => (
            <div key={item.id} className="flex gap-4 rounded-3xl border border-dairy-gold/40 bg-white p-3 shadow-sm">
              <img src={item.image} alt={item.name} className="h-24 w-24 rounded-2xl object-cover" />
              <div className="min-w-0 flex-1">
                <div className="flex justify-between gap-2"><div><h3 className="font-bold">{item.name}</h3><p className="text-sm text-dairy-caramel">₹{item.price}</p></div><button onClick={() => removeFromCart(item.id)} aria-label={`Remove ${item.name}`} className="h-fit rounded-full bg-dairy-cream p-2 text-dairy-chocolate"><Trash2 size={16} /></button></div>
                <div className="mt-3 flex items-center justify-between">
                  <div className="flex items-center gap-3 rounded-full bg-dairy-cream px-3 py-1.5"><button onClick={() => changeQuantity(item.id, -1)}><Minus size={14} /></button><span className="font-semibold">{item.quantity}</span><button onClick={() => changeQuantity(item.id, 1)}><Plus size={14} /></button></div>
                  <p className="font-bold">₹{item.price * item.quantity}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 border-t border-dairy-gold/50 pt-5">
          <div className="flex justify-between text-lg"><span>Subtotal</span><strong>₹{subtotal}</strong></div>
          <p className="mt-1 text-right text-xs text-dairy-brown/60">Delivery charge to be confirmed by the shop</p>
          <div className="mt-5 flex justify-between text-2xl font-bold"><span>Total</span><span>₹{subtotal}</span></div>
          <button disabled={!cart.length} onClick={onCheckout} className="mt-6 flex w-full items-center justify-center gap-3 rounded-full bg-dairy-brown px-6 py-4 font-bold text-white transition hover:bg-dairy-caramel disabled:cursor-not-allowed disabled:opacity-40">Checkout on WhatsApp <ArrowRight /></button>
        </div>
      </motion.aside>
    </motion.div>
  );
}