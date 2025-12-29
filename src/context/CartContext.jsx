

import React, {
  createContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export const CartContext = createContext(null);

/* ===================== CONFIG ===================== */
const STOCK_LIMITS = {
  snapback1: 5,
  snapback2: 10,
};

const COUPONS = {
  SAVE10: 0.1,
  SAVE20: 0.2,
};
/* ================================================== */

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  const [coupon, setCoupon] = useState(null);

  /* ---------- Sync across tabs ---------- */
  useEffect(() => {
    const sync = (e) => {
      if (e.key === "cart") {
        setCart(e.newValue ? JSON.parse(e.newValue) : []);
      }
    };
    window.addEventListener("storage", sync);
    return () => window.removeEventListener("storage", sync);
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  /* ---------- Utilities ---------- */
  const formatPrice = (amount) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);

  /* ---------- Cart Actions ---------- */
  const addToCart = (product) => {
    if (!product?.id) return;

    setCart((prev) => {
      const index = prev.findIndex((i) => i.id === product.id);
      const limit = STOCK_LIMITS[product.id] ?? Infinity;

      if (index !== -1) {
        if (prev[index].qty >= limit) return prev;

        const updated = [...prev];
        updated[index] = {
          ...updated[index],
          qty: updated[index].qty + 1,
        };
        return updated;
      }

      return [...prev, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => {
      const index = prev.findIndex((i) => i.id === id);
      if (index === -1) return prev;

      if (prev[index].qty > 1) {
        const updated = [...prev];
        updated[index] = {
          ...updated[index],
          qty: updated[index].qty - 1,
        };
        return updated;
      }

      return prev.filter((i) => i.id !== id);
    });
  };

  const clearCart = () => {
    setCart([]);
    setCoupon(null);
  };

  /* ---------- Coupon ---------- */
  const applyCoupon = (code) => {
    const value = COUPONS[code.toUpperCase()];
    if (!value) return false;
    setCoupon({ code, value });
    return true;
  };

  /* ---------- Totals ---------- */
  const totals = useMemo(() => {
    const itemCount = cart.reduce((s, i) => s + i.qty, 0);
    const subtotal = cart.reduce(
      (s, i) => s + Number(i.price) * i.qty,
      0
    );
    const discount = coupon ? subtotal * coupon.value : 0;
    const total = subtotal - discount;

    return {
      itemCount,
      subtotal,
      discount,
      total,
    };
  }, [cart, coupon]);

  /* ---------- Stripe Checkout ---------- */
  const checkoutWithStripe = async () => {
    alert(
      "Stripe checkout would start here.\nUse Stripe Checkout or Payment Intent on backend."
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        applyCoupon,
        checkoutWithStripe,
        formatPrice,
        coupon,
        ...totals,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
