import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import fourcap from "../assets/fourcap.png";
import allbeanie from "../assets/allbeanie.png";
import buckethat from "../assets/buckethat.png";
import camo from "../assets/camo.png";
import skull from "../assets/skull.png";
import greencap from "../assets/greencap.png";
import redcap from "../assets/redcap.png";
import wool from "../assets/wool.png";
import bag from "../assets/bag.png";
import woolbean from "../assets/woolbean.png";
import durag from "../assets/durag.png";

export default function Home() {
  const slides = [
    fourcap, allbeanie, buckethat, camo, skull,
    greencap, redcap, wool, bag, woolbean, durag,
  ];
  const slideCount = slides.length;

  return (
    <section className="relative min-h-screen overflow-hidden text-white">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-black" />

      {/* Content */}
      <div className="relative z-10 flex flex-col-reverse items-center max-w-6xl min-h-screen gap-16 px-6 py-24 mx-auto md:grid md:grid-cols-2 md:gap-12 md:py-32">

        {/* LEFT — BRAND / COPY */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full p-8 space-y-6 border shadow-2xl rounded-3xl border-white/10 bg-white/5 backdrop-blur-xl md:p-10"
        >
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
            KickNcaps®
          </h1>

          <h2 className="text-xl font-semibold text-zinc-300 md:text-2xl">
            Streetwear that speaks louder
          </h2>

          <p className="max-w-md text-base leading-relaxed text-zinc-400 md:text-lg">
            Premium snapbacks crafted for comfort, confidence,
            and street culture. Built to stand out.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              to="/shop"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold transition bg-green-600 rounded-full shadow-lg hover:bg-green-700"
            >
              Shop Collection
            </Link>

            <Link
              to="/about"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold transition border rounded-full border-white/20 hover:bg-white/10"
            >
              Our Story
            </Link>
          </div>
        </motion.div>

        {/* RIGHT — HERO CAROUSEL */}
        <motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="relative w-full"
>
  {/* Glow */}
  <div className="absolute inset-0 rounded-full bg-green-600/20 blur-3xl" />

  <div className="relative overflow-hidden shadow-2xl rounded-3xl">
    {/* Edge fade */}
    <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-black via-transparent to-black" />

    <motion.div
      className="flex h-[300px] md:h-[380px]"
      animate={{
        x: `-${slides.length * 100}%`, // Slide all images
      }}
      transition={{
        duration: slides.length * 5, // Adjust speed, faster than before
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {[...slides, ...slides].map((img, index) => (
        <div
          key={index}
          className="flex items-center justify-center flex-shrink-0 w-full h-full"
        >
          <motion.img
            src={img}
            alt="Snapback"
            className="object-contain w-3/4 cursor-pointer h-3/4 drop-shadow-2xl"
            whileHover={{
              rotateY: 15,
              rotateX: 8,
              scale: 1.08,
            }}
            transition={{
              type: "spring",
              stiffness: 180,
              damping: 16,
            }}
            style={{ perspective: "1200px" }}
          />
        </div>
      ))}
    </motion.div>
  </div>
</motion.div>

      </div>

      {/* Scroll cue */}
      <div className="absolute text-xs tracking-widest uppercase -translate-x-1/2 bottom-6 left-1/2 text-zinc-400 animate-bounce">
        Scroll
      </div>
    </section>
  );
}
