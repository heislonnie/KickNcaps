import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import { motion } from "framer-motion";
import SizeGuideModal from "../components/SizeGuideModal";

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

/* ---------- SIZE DATA ---------- */
const SIZES = [
  { label: "S", cm: 55, inches: 21.65, us: "6 7/8" },
  { label: "M", cm: 57, inches: 22.44, us: "7 1/8" },
  { label: "L", cm: 59, inches: 23.23, us: "7 3/8" },
  { label: "XL", cm: 61, inches: 24.02, us: "7 5/8" },
  { label: "XXL", cm: 63, inches: 24.8, us: "7 7/8" },
];

/* ---------- PRODUCTS ---------- */
const products = [
  { id: 1, name: "Beanie", price: 9.99, img: Beanie, tag: "New" },
  { id: 2, name: "Street Red Snapback", price: 14.99, img: StreetRed, tag: "Hot" },
  { id: 3, name: "Urban Camo Snapback", price: 24.99, img: urbanCamo },
  { id: 4, name: "Minimal White Snapback", price: 19.99, img: minimalWhite },
  { id: 5, name: "Heritage Grey Snapback", price: 9.99, img: heritageGrey },
  { id: 6, name: "Unisex Beanie", price: 29.99, img: nightRed, tag: "Limited" },
  { id: 7, name: "Wool Beanie", price: 14.99, img: WoolBeanie },
  { id: 8, name: "Durag", price: 4.99, img: Durag },
  { id: 9, name: "Skull Cap", price: 9.99, img: SkullCap },
  { id: 10, name: "Bucket Hat", price: 14.99, img: BucketHat },
  { id: 11, name: "Cap Bag", price: 29.99, img: CapBag },
  { id: 12, name: "Collection", price: 14.99, img: Collection, tag: "Exclusive" },
];

/* ---------- MOCK STOCK (PER SIZE) ---------- */
const STOCK = {
  S: true,
  M: true,
  L: true,
  XL: false,
  XXL: true,
};

export default function Shop() {
  const { addToCart } = useContext(CartContext);
  const [sizeGuideOpen, setSizeGuideOpen] = useState(false);
  const [selectedSizes, setSelectedSizes] = useState({});

  /* Restore sizes from session */
  useEffect(() => {
    const saved = sessionStorage.getItem("selectedSizes");
    if (saved) setSelectedSizes(JSON.parse(saved));
  }, []);

  const selectSize = (productId, size) => {
    const next = { ...selectedSizes, [productId]: size };
    setSelectedSizes(next);
    sessionStorage.setItem("selectedSizes", JSON.stringify(next));
  };

  const handleAddToCart = (product) => {
    const size = selectedSizes[product.id];
    if (!size) return alert("Please select a size first.");

    addToCart({
      ...product,
      size,
    });
  };

  return (
    <section className="min-h-screen bg-[#111827] text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-extrabold">Our Collection</h2>
          <p className="mt-3 text-gray-400">
            Premium headwear built for street culture
          </p>
          <button
            onClick={() => setSizeGuideOpen(true)}
            className="mt-4 text-sm underline text-gray-300 hover:text-white"
          >
            View Size Guide
          </button>
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
          {products.map((product) => {
            const selected = selectedSizes[product.id];

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative p-4 rounded-2xl bg-[#1f2937]/90 border border-white/5 shadow-xl hover:shadow-2xl transition"
              >
                {product.tag && (
                  <span className="absolute top-4 right-4 text-xs px-3 py-1 rounded-full bg-black/70 border border-white/10">
                    {product.tag}
                  </span>
                )}

                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-64 object-cover rounded-xl"
                />

                <div className="mt-4">
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-gray-400">${product.price}</p>
                </div>

                {/* SIZE SELECTOR */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {SIZES.map((size) => {
                    const out = !STOCK[size.label];
                    const active = selected?.label === size.label;

                    return (
                      <button
                        key={size.label}
                        disabled={out}
                        onClick={() => selectSize(product.id, size)}
                        className={`px-3 py-1 rounded-lg text-sm border transition
                          ${
                            active
                              ? "bg-white text-black border-white"
                              : "border-white/20 text-white"
                          }
                          ${out && "opacity-40 cursor-not-allowed"}
                        `}
                      >
                        {size.label}
                      </button>
                    );
                  })}
                </div>

                <button
                  onClick={() => handleAddToCart(product)}
                  className="mt-5 w-full py-2.5 rounded-xl bg-white text-black font-medium hover:bg-black hover:text-white transition"
                >
                  Add to Cart
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>

      <SizeGuideModal
        open={sizeGuideOpen}
        onClose={() => setSizeGuideOpen(false)}
      />
    </section>
  );
}
