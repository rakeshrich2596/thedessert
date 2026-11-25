# The Dessert Dairy — React Website

A responsive dessert-shop website built with React, Vite, Tailwind CSS, Framer Motion and Lucide React.

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

Upload the generated `dist/` folder to your hosting provider.

## Component structure

- `src/components/Navbar.jsx` — responsive navigation and cart button
- `src/components/Hero.jsx` — animated landing/hero section
- `src/components/MenuSection.jsx` — menu categories, product cards and add-to-cart
- `src/components/WhyChooseUs.jsx` — feature cards
- `src/components/LocationSection.jsx` — address, opening hours and directions
- `src/components/Footer.jsx` — footer and social/contact links
- `src/components/CartDrawer.jsx` — slide-in cart
- `src/components/CheckoutModal.jsx` — checkout form and WhatsApp order message
- `src/context/CartContext.jsx` — shared cart state
- `src/data/products.js` — product names, prices, categories and images
- `src/index.css` — global styles and reusable form styles

## Easy customisation

### Change product names or prices
Edit `src/data/products.js`.

### Change shop WhatsApp number
Search for `919384220156` in `Navbar.jsx`, `LocationSection.jsx`, `Footer.jsx` and `CheckoutModal.jsx`. Use country code 91 and no plus sign or spaces.

### Change opening hours or address
Edit `src/components/LocationSection.jsx` and `src/components/Footer.jsx`.

### Change logo
Replace `public/logo.jpg` with your logo, keeping the same filename.

### Change design colours
Edit the `dairy` palette in `tailwind.config.js`.

## Notes

- The website is frontend-only. Cart contents are held in React state and reset when the page is refreshed.
- Checkout opens WhatsApp with the customer's cart and entered details. The shop confirms delivery charges and availability manually.
- The alternate contact number is displayed in the location section. The primary WhatsApp order link currently uses 9384220156.
