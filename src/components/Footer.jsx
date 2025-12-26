import React from "react";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#1f2937] text-gray-300 text-center py-6 mt-12">
      <div className="flex justify-center mb-4 space-x-6">
        <a href="#" className="transition hover:text-white">
          <FaInstagram size={20} />
        </a>
        <a href="#" className="transition hover:text-white">
          <FaTwitter size={20} />
        </a>
        <a href="#" className="transition hover:text-white">
          <FaFacebook size={20} />
        </a>
      </div>
      <p className="text-sm">
        © {new Date().getFullYear()} Lonnie. All rights reserved.
      </p>
    </footer>
  );
}
