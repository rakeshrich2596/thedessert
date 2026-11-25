import { useState } from "react";
import { motion } from "framer-motion";
import { X, MessageCircle, MapPin, User, Phone } from "lucide-react";
import { useCart } from "../context/CartContext";

const SHOP_WHATSAPP = "919361553904";

export default function CheckoutModal({ onClose }) {
  const { cart, subtotal } = useCart();
  const [form, setForm] = useState({ name: "", phone: "", address: "", delivery: "Home Delivery", note: "" });
  const [error, setError] = useState("");

  const update = (event) => setForm({ ...form, [event.target.name]: event.target.value });

  const placeOrder = (event) => {
    event.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.address.trim()) {
      setError("Please fill in your name, phone number and address.");
      return;
    }
    const itemLines = cart.map((item) => `• ${item.name} x ${item.quantity} = ₹${item.price * item.quantity}`).join("\n");
    const message = `Hello The Dessert Dairy! I'd like to place an order:\n\n${itemLines}\n\nSubtotal: ₹${subtotal}\n\nName: ${form.name}\nPhone: ${form.phone}\nOrder Type: ${form.delivery}\nAddress: ${form.address}\nNote: ${form.note || "None"}\n\nPlease confirm my order.`;
    window.open(`https://wa.me/${SHOP_WHATSAPP}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.div className="fixed inset-0 z-[60] grid place-items-center overflow-y-auto bg-black/50 p-3 backdrop-blur-sm sm:p-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      <motion.div initial={{ opacity: 0, y: 30, scale: .97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20 }} onClick={(e) => e.stopPropagation()} className="my-auto max-h-[94vh] w-full max-w-2xl overflow-y-auto rounded-[30px] bg-dairy-paper p-5 shadow-2xl sm:p-8">
        <div className="mb-6 flex items-start justify-between"><div><p className="text-sm font-semibold text-dairy-caramel">Almost there!</p><h2 className="text-3xl font-bold">Confirm Your Order</h2><p className="mt-2 text-sm text-dairy-brown/70">Add your details and continue to WhatsApp.</p></div><button onClick={onClose} className="rounded-full bg-dairy-cream p-2" aria-label="Close checkout"><X /></button></div>
        <div className="mb-6 rounded-2xl bg-white p-4">
          <h3 className="mb-3 font-bold">Order Summary ({cart.length} products)</h3>
          {cart.map((item) => <div key={item.id} className="flex justify-between gap-3 py-1 text-sm"><span>{item.name} × {item.quantity}</span><strong>₹{item.price * item.quantity}</strong></div>)}
          <div className="mt-3 flex justify-between border-t border-dairy-gold/50 pt-3 text-lg font-bold"><span>Total</span><span>₹{subtotal}</span></div>
        </div>
        <form onSubmit={placeOrder} className="space-y-4">
          <label className="form-label"><span><User size={16} className="inline" /> Full Name *</span><input name="name" value={form.name} onChange={update} placeholder="Enter your name" /></label>
          <label className="form-label"><span><Phone size={16} className="inline" /> WhatsApp Phone Number *</span><input name="phone" value={form.phone} onChange={update} placeholder="Enter your phone number" inputMode="tel" /></label>
          <label className="form-label"><span><MapPin size={16} className="inline" /> Delivery Address *</span><textarea name="address" value={form.address} onChange={update} placeholder="Enter your complete address" rows="3" /></label>
          <div><p className="mb-2 text-sm font-semibold">Order Type</p><div className="grid grid-cols-2 gap-3">{["Home Delivery", "Store Pickup"].map((type) => <button type="button" key={type} onClick={() => setForm({ ...form, delivery: type })} className={`rounded-xl border px-3 py-3 text-sm font-semibold ${form.delivery === type ? "border-dairy-brown bg-dairy-cream" : "border-dairy-gold/60 bg-white"}`}>{type}</button>)}</div></div>
          <label className="form-label"><span>Order Notes (Optional)</span><textarea name="note" value={form.note} onChange={update} placeholder="Any special request?" rows="2" /></label>
          {error && <p role="alert" className="text-sm font-medium text-red-700">{error}</p>}
          <button type="submit" className="flex w-full items-center justify-center gap-3 rounded-full bg-[#128c42] px-6 py-4 font-bold text-white shadow-lg transition hover:bg-[#0d7335]"><MessageCircle /> Place Order on WhatsApp</button>
          <p className="text-center text-xs text-dairy-brown/60">WhatsApp will open with your order details for confirmation.</p>
        </form>
      </motion.div>
    </motion.div>
  );
}