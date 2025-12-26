// import React, { useState, useContext } from "react";
// import { Link } from "react-router-dom";
// import { CartContext } from "../context/CartContext";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const { cart } = useContext(CartContext);
//   // Derive a simple item count for the cart badge. Keep it trivial (length)
//   const count = Array.isArray(cart) ? cart.length : 0;

//   return (
//     <nav className="bg-[#111827] text-white px-6 py-4 shadow-md">
//       <div className="flex items-center justify-between max-w-6xl mx-auto">
//         <Link to="/" className="text-2xl font-extrabold tracking-tight">KickNcaps</Link>

//         <div className="items-center hidden space-x-6 font-medium md:flex">
//           <Link to="/" className="transition hover:text-gray-400">Home</Link> 
//           <Link to="/shop" className="transition hover:text-gray-400">Shop</Link>
//           <Link to="/about" className="transition hover:text-gray-400">About</Link>
//           <Link to="/contact" className="transition hover:text-gray-400">Contact</Link>

//           <div className="relative">
//             <Link to="/cart" className="hover:text-gray-300">Cart</Link>
//             {count > 0 && (
//               <span className="absolute -top-2 -right-3  bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
//                 {count}
//               </span>
//             )}
//           </div>
//         </div>

//         <button className="md:hidden focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
//           <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none"
//             viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
//               d="M4 6h16M4 12h16M4 18h16" />
//           </svg>
//         </button>
//       </div>
       
//       {isOpen && (
//         <div className="px-6 mt-4 space-y-2 md:hidden">
//           <Link to="/" className="block hover:text-gray-400">Home</Link>
//           <Link to="/shop" className="block hover:text-gray-400">Shop</Link>
//           <Link to="/about" className="block hover:text-gray-400">About</Link>
//           <Link to="/contact" className="block hover:text-gray-400">Contact</Link>
//           <Link to="/cart" className="block hover:text-gray-400">Cart</Link>
//         </div>
//       )}
//     </nav>
//   );
// }


import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useContext(CartContext);
  const count = Array.isArray(cart) ? cart.length : 0;

  return (
    <nav className="fixed top-0 left-0 z-50 w-full text-white shadow-lg backdrop-blur-md bg-black/70">
      <div className="flex items-center justify-between max-w-6xl px-6 py-4 mx-auto">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-extrabold tracking-tight transition hover:text-green-500"
        >
          KickNcaps
        </Link>

        {/* Desktop Links */}
        <div className="items-center hidden space-x-8 font-medium md:flex">
          <Link to="/" className="transition-colors hover:text-green-400">
            Home
          </Link>
          <Link to="/shop" className="transition-colors hover:text-green-400">
            Shop
          </Link>
          <Link to="/about" className="transition-colors hover:text-green-400">
            About
          </Link>
          <Link to="/contact" className="transition-colors hover:text-green-400">
            Contact
          </Link>

          {/* Cart */}
          <div className="relative">
            <Link to="/cart" className="transition-colors hover:text-green-300">
              Cart
            </Link>
            {count > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                {count}
              </span>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96" : "max-h-0"
        } px-6`}
      >
        <Link
          to="/"
          className="block py-2 transition-colors hover:text-green-400"
          onClick={() => setIsOpen(false)}
        >
          Home
        </Link>
        <Link
          to="/shop"
          className="block py-2 transition-colors hover:text-green-400"
          onClick={() => setIsOpen(false)}
        >
          Shop
        </Link>
        <Link
          to="/about"
          className="block py-2 transition-colors hover:text-green-400"
          onClick={() => setIsOpen(false)}
        >
          About
        </Link>
        <Link
          to="/contact"
          className="block py-2 transition-colors hover:text-green-400"
          onClick={() => setIsOpen(false)}
        >
          Contact
        </Link>
        <Link
          to="/cart"
          className="block py-2 transition-colors hover:text-green-400"
          onClick={() => setIsOpen(false)}
        >
          Cart
        </Link>
      </div>
    </nav>
  );
}
