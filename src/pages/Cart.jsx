// import React, { useContext } from "react";
// import { CartContext } from "../context/CartContext";


// export default function Cart() {
//   const { cart, decrementItem, clearCart, totalPrice } = useContext(CartContext);

//   console.log('Cart component rendering', { cart, totalPrice });

//   const totalItems = cart.reduce((s, i) => s + i.qty, 0);

//   return (
//     <section className="bg-[#111827] text-white min-h-screen py-16 px-6">
//       <div className="max-w-4xl mx-auto">
//         <h2 className="mb-8 text-4xl font-bold text-center">Your Cart</h2>

//         {totalItems === 0 ? (
//           <p className="text-center text-gray-400">Your cart is empty.</p>
//         ) : (
//           <div className="space-y-6">
//             {cart.map((item) => (
//               <div key={item.id} className="flex items-center justify-between bg-[#1f2937] p-4 rounded-lg shadow">
//                 <div className="flex items-center space-x-4">
//                   <img src={item.img} alt={item.name} className="object-cover w-20 h-20 rounded-lg" />
//                   <div>
//                     <h3 className="text-lg font-semibold">{item.name}</h3>
//                     <p className="text-gray-400">Qty: {item.qty}</p>
//                     <p className="text-gray-400">${item.price} each</p>
//                   </div>
//                 </div>
//                 <div className="flex flex-col items-end">
//                   <button onClick={() => decrementItem(item.id)} className="text-red-400 hover:text-red-500">
//                     Remove
//                   </button>
//                 </div>
//               </div>
//             ))}

//             <div className="flex items-center justify-between mt-8 text-xl font-bold">
//               <span>Total</span>
//               <span>₦{totalPrice}</span>
//             </div>

//             <div className="flex mt-6 space-x-4">
//               <button className="flex-1 py-3 text-black transition bg-white rounded-lg hover:bg-gray-200">Checkout</button>
//               <button onClick={() => clearCart()} className="flex-1 py-3 bg-transparent border border-gray-600 rounded-lg">Clear Cart</button>
//             </div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }

import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Cart() {
  const { cart, decrementItem, clearCart, totalPrice, formatPrice } =
    useContext(CartContext);

  const totalItems = cart.reduce((s, i) => s + i.qty, 0);

  return (
    <section className="min-h-screen bg-[#111827] text-white py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="mb-10 text-4xl font-extrabold text-center">
          Your Cart
        </h2>

        {totalItems === 0 ? (
          <p className="text-center text-gray-400">
            Your cart is empty. Pick something fire 🔥
          </p>
        ) : (
          <div className="space-y-6">
            {cart.map((item) => (
              <div
                key={`${item.id}-${item.size?.label}`}
                className="flex items-center justify-between p-5 rounded-2xl bg-[#1f2937] shadow-lg"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="object-cover w-20 h-20 rounded-xl"
                  />

                  <div>
                    <h3 className="text-lg font-semibold">{item.name}</h3>

                    {item.size && (
                      <p className="text-sm text-gray-400">
                        Size: {item.size.label} · {item.size.cm}cm · US{" "}
                        {item.size.us}
                      </p>
                    )}

                    <p className="text-sm text-gray-400">
                      {formatPrice(item.price)} each
                    </p>

                    <p className="text-sm text-gray-400">
                      Qty: {item.qty}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() =>
                    decrementItem(item.id, item.size?.label)
                  }
                  className="text-sm text-red-400 transition hover:text-red-500"
                >
                  Remove
                </button>
              </div>
            ))}

            <div className="flex items-center justify-between pt-6 text-xl font-bold">
              <span>Total</span>
              <span>{formatPrice(totalPrice)}</span>
            </div>

            <div className="flex gap-4 pt-4">
              <button className="flex-1 py-3 font-semibold text-black transition bg-white rounded-xl hover:bg-gray-200">
                Checkout
              </button>
              <button
                onClick={clearCart}
                className="flex-1 py-3 transition border border-gray-600 rounded-xl hover:border-gray-400"
              >
                Clear Cart
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

