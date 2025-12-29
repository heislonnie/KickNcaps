

import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import CartDrawer from "./CartDrawer";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const { itemCount } = useContext(CartContext);

  return (
    <>
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
            <button
              onClick={() => setCartDrawerOpen(true)}
              className="relative p-2 transition-colors hover:text-green-300 focus:outline-none"
              aria-label="Open cart"
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
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.1 5H19M7 13v8a2 2 0 002 2h10a2 2 0 002-2v-3"
                />
              </svg>
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full min-w-[1.25rem] h-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Cart Button Mobile */}
        <button
          onClick={() => setCartDrawerOpen(true)}
          className="relative p-2 mr-2 transition-colors hover:text-green-300 focus:outline-none md:hidden"
          aria-label="Open cart"
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
              strokeWidth={2}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.1 5H19M7 13v8a2 2 0 002 2h10a2 2 0 002-2v-3"
            />
          </svg>
          {itemCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full min-w-[1.25rem] h-5 flex items-center justify-center">
              {itemCount}
            </span>
          )}
        </button>

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

    <CartDrawer open={cartDrawerOpen} onClose={() => setCartDrawerOpen(false)} />
  </>
  );
}
