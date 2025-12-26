

import React, { createContext, useState, useEffect } from "react";

// Create context
export const CartContext = createContext(null);

// CartProvider component
export function CartProvider({ children }) {
  // Load cart from localStorage if available
  const [cart, setCart] = useState(() => {
    try {
      const storedCart = localStorage.getItem("cart");
      return storedCart ? JSON.parse(storedCart) : [];
    } catch {
      return [];
    }
  });

  // Persist cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Add a product or increment quantity if it already exists
  const addToCart = (product, quantity = 1) => {
    if (!product || typeof product.id === "undefined") return;

    setCart((prev) => {
      const index = prev.findIndex((item) => item.id === product.id);
      if (index !== -1) {
        // Increment quantity
        const updated = [...prev];
        updated[index] = {
          ...updated[index],
          quantity: updated[index].quantity + quantity,
        };
        return updated;
      }
      // Add new product with quantity
      return [...prev, { ...product, quantity }];
    });
  };

  // Remove a product completely by id
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // Decrement quantity or remove if quantity <= 1
  const decrementItem = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Clear entire cart
  const clearCart = () => setCart([]);

  // Calculate total items
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  // Calculate total price
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // Check if a product is already in cart
  const isInCart = (id) => cart.some((item) => item.id === id);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        decrementItem,
        clearCart,
        totalItems,
        totalPrice,
        isInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
