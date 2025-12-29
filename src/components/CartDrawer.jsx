// import React, { useContext } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { CartContext } from "../context/CartContext";

// export default function CartDrawer({ open, onClose }) {
//   const {
//     cart,
//     addToCart,
//     removeFromCart,
//     applyCoupon,
//     checkoutWithStripe,
//     formatPrice,
//     total,
//   } = useContext(CartContext);

//   return (
//     <AnimatePresence>
//       {open && (
//         <>
//           {/* Backdrop */}
//           <motion.div
//             className="fixed inset-0 z-40 bg-black/60"
//             onClick={onClose}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           />

//           {/* Drawer */}
//           <motion.aside
//             className="fixed right-0 top-0 z-50 h-full w-full max-w-md bg-[#0b1120] text-white shadow-2xl"
//             initial={{ x: "100%" }}
//             animate={{ x: 0 }}
//             exit={{ x: "100%" }}
//             transition={{ type: "spring", stiffness: 300, damping: 30 }}
//           >
//             <div className="flex flex-col h-full p-6">
//               <h2 className="mb-6 text-2xl font-bold">Your Cart</h2>

//               <div className="flex-1 space-y-4 overflow-y-auto">
//                 {cart.map((item) => (
//                   <div
//                     key={item.id}
//                     className="flex items-center justify-between p-4 rounded-xl bg-white/5"
//                   >
//                     <div>
//                       <p className="font-semibold">{item.name}</p>
//                       <p className="text-sm text-gray-400">
//                         {formatPrice(item.price)}
//                       </p>
//                     </div>

//                     <div className="flex items-center gap-3">
//                       <button onClick={() => removeFromCart(item.id)}>−</button>
//                       <span>{item.qty}</span>
//                       <button onClick={() => addToCart(item)}>+</button>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               <input
//                 placeholder="Coupon code"
//                 className="p-2 mt-4 text-sm rounded-lg bg-black/30"
//                 onKeyDown={(e) =>
//                   e.key === "Enter" && applyCoupon(e.target.value)
//                 }
//               />

//               <button
//                 onClick={checkoutWithStripe}
//                 className="py-3 mt-4 font-semibold text-black bg-green-600 rounded-xl"
//               >
//                 Checkout · {formatPrice(total)}
//               </button>
//             </div>
//           </motion.aside>
//         </>
//       )}
//     </AnimatePresence>
//   );
// }


import React, { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CartContext } from "../context/CartContext";

export default function CartDrawer({ open, onClose }) {
  const {
    cart,
    addToCart,
    removeFromCart,
    applyCoupon,
    checkoutWithStripe,
    formatPrice,
    total,
  } = useContext(CartContext);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-40 bg-black/60"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.aside
            className="fixed right-0 top-0 z-50 h-full w-full max-w-md bg-[#0b1120] text-white shadow-2xl"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="flex flex-col h-full p-6">
              <h2 className="mb-6 text-2xl font-bold">Your Cart</h2>

              <div className="flex-1 space-y-4 overflow-y-auto">
                {cart.map((item) => (
                  <div
                    key={`${item.id}-${item.size?.label}`}
                    className="p-4 rounded-xl bg-white/5"
                  >
                    <p className="font-semibold">{item.name}</p>

                    {item.size && (
                      <p className="text-xs text-gray-400">
                        Size: {item.size.label} · {item.size.cm}cm · US{" "}
                        {item.size.us}
                      </p>
                    )}

                    <p className="text-sm text-gray-400">
                      {formatPrice(item.price)}
                    </p>

                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() =>
                          removeFromCart(item.id, item.size?.label)
                        }
                        className="px-2 py-1 rounded bg-white/10 hover:bg-white/20"
                      >
                        −
                      </button>

                      <span>{item.qty}</span>

                      <button
                        onClick={() => addToCart(item)}
                        className="px-2 py-1 rounded bg-white/10 hover:bg-white/20"
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <input
                placeholder="Coupon code"
                className="p-2 mt-4 text-sm rounded-lg bg-black/30"
                onKeyDown={(e) =>
                  e.key === "Enter" && applyCoupon(e.target.value)
                }
              />

              <button
                onClick={checkoutWithStripe}
                className="py-3 mt-4 font-semibold text-black bg-green-600 rounded-xl hover:bg-green-500 transition"
              >
                Checkout · {formatPrice(total)}
              </button>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

