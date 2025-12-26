import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";


export default function Cart() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + Number(item.price || 0), 0);

  return (
    <section className="bg-[#111827] text-white min-h-screen py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="mb-8 text-4xl font-bold text-center">Your Cart</h2>

        {cart.length === 0 ? (
          <p className="text-center text-gray-400">Your cart is empty.</p>
        ) : (
          <div className="space-y-6">
            {cart.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between bg-[#1f2937] p-4 rounded-lg shadow">
                <div className="flex items-center space-x-4">
                  <img src={item.img} alt={item.name} className="object-cover w-20 h-20 rounded-lg" />
                  <div>
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-gray-400">₦{item.price}</p>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <button onClick={() => removeFromCart(item.id)} className="text-red-400 hover:text-red-500">
                    Remove
                  </button>
                </div>
              </div>
            ))}

            <div className="flex items-center justify-between mt-8 text-xl font-bold">
              <span>Total</span>
              <span>₦{total}</span>
            </div>

            <div className="flex mt-6 space-x-4">
              <button className="flex-1 py-3 text-black transition bg-white rounded-lg hover:bg-gray-200">Checkout</button>
              <button onClick={() => clearCart()} className="flex-1 py-3 bg-transparent border border-gray-600 rounded-lg">Clear Cart</button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
