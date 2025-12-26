import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { motion } from "framer-motion";

import Beanie from "../assets/allbeanie.png";
import StreetRed from "../assets/redcap.png";
import urbanCamo from "../assets/camo.png";
import minimalWhite from "../assets/fourcap.png";
import heritageGrey from "../assets/greencap.png";
import SkullCap from "../assets/skull.png";
import nightRed from "../assets/wool.png";
import BucketHat from "../assets/buckethat.png";
import CapBag from "../assets/bag.png";
import WoolBeanie from "../assets/woolbean.png";
import Durag from "../assets/durag.png";  
import Collection from "../assets/display.png";
  

const products = [
  {
    id: 1,
    name: "Beanie",
    price: 9.99,
    img: Beanie,
    tag: "New",
  },
  {
    id: 2,
    name: "Street Red Snapback",
    price: 14.99,
    img: StreetRed,
    tag: "Hot",
  },
  {
    id: 3,
    name: "Urban Camo Snapback",
    price: 24.99,
    img: urbanCamo,
  },
  {
    id: 4,
    name: "Minimal White Snapback",
    price: 19.99,
    img: minimalWhite,
  },
  {
    id: 5,
    name: "Heritage Grey Snapback",
    price: 9.99,
    img: heritageGrey,
  },
 
  {
    id: 6,
    name: "Unisex Beanie",
    price: 29.99,
    img: nightRed,
    tag: "Limited",
  },

  {
    id : 7,
    name: "Wool Beanie",
    price: 14.99,
    img: WoolBeanie,
  },

  {
    id : 8,
    name: "Durag",
    price: 4.99,
    img: Durag,
  },

  {
    id : 9,
    name: "Skull Cap",
    price: 9.99,
    img: SkullCap,
  }, 

  {
    id : 10,
    name: "Bucket Hat",
    price: 14.99,
    img: BucketHat,
  },

  {
    id : 11,
    name: "Cap Bag",
    price: 29.99,
    img: CapBag,
  },

  {
    id : 12,
    name: "Collection",
    price: 14.99,
    img: Collection,
    tag: "Exclusive",
  }
];

export default function Shop() {
  const { addToCart } = useContext(CartContext) || {};

  return (
    <section className="min-h-screen bg-[#111827] text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-extrabold tracking-tight">
            Our Collection
          </h2>
          <p className="mt-3 text-gray-400">
            Premium snapbacks built for street culture
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
          {products.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="group relative bg-[#1f2937]/90 backdrop-blur
                         border border-white/5 rounded-2xl p-4
                         shadow-xl transition-all duration-300
                         hover:-translate-y-1 hover:shadow-2xl hover:border-white/10"
            >
              {/* Badge */}
              {product.tag && (
                <span className="absolute z-10 px-3 py-1 text-xs tracking-wider uppercase border rounded-full top-4 right-4 bg-black/70 border-white/10">
                  {product.tag}
                </span>
              )}

              {/* Image */}
              <div className="overflow-hidden rounded-xl">
                <img
                  src={product.img}
                  alt={product.name}
                  className="object-cover w-full h-64 transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Info */}
              <div className="mt-4">
                <h3 className="text-lg font-semibold tracking-wide">
                  {product.name}
                </h3>
                <p className="mt-1 text-sm text-gray-400">
                  ${product.price.toLocaleString()}
                </p>
              </div>

              {/* Button */}
              <button
                onClick={() => {
                  if (typeof addToCart === "function") addToCart(product);
                }}
                className="mt-4 w-full py-2.5 rounded-xl
                           bg-white text-black font-medium
                           transition-all duration-300
                           hover:bg-black hover:text-white hover:shadow-lg"
              >
                Add to Cart
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
