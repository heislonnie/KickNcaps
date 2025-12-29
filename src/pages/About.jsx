import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <section className="bg-[#111827] text-white min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="mb-6 text-5xl font-bold md:text-6xl">About KickNcaps</h1>
          <p className="text-xl text-gray-300">Premium snapbacks for the modern urbanite</p>
        </div>

        {/* Mission */}
        <div className="grid gap-12 mb-16 md:grid-cols-2">
          <div className="bg-[#1f2937] rounded-lg p-8 shadow-lg">
            <h2 className="mb-4 text-2xl font-bold text-green-400">Our Mission</h2>
            <p className="leading-relaxed text-gray-300">
              KickNcaps is a lifestyle brand crafting premium snapbacks that merge urban culture with timeless quality. 
              We believe that a great cap transcends fashion—it's a statement, an attitude, a lifestyle.
            </p>
          </div>

          <div className="bg-[#1f2937] rounded-lg p-8 shadow-lg">
            <h2 className="mb-4 text-2xl font-bold text-green-400">Our Values</h2>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="mt-1 text-green-400">✓</span>
                <span><strong>Quality</strong> — Premium materials and craftsmanship</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-green-400">✓</span>
                <span><strong>Authenticity</strong> — Rooted in real urban culture</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-green-400">✓</span>
                <span><strong>Innovation</strong> — Modern designs, timeless appeal</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Story */}
        <div className="bg-gradient-to-r from-[#1f2937] to-[#0f172a] rounded-lg p-10 mb-16 shadow-lg border border-green-400/20">
          <h2 className="mb-6 text-3xl font-bold">Our Story</h2>
          <div className="space-y-4 leading-relaxed text-gray-300">
            <p>
              Founded by snapback enthusiasts who saw a gap in the market, KickNcaps began as a passion project. 
              We noticed that most caps were either too expensive or lacked genuine style and substance.
            </p>
            <p>
              So we set out to create something different: snapbacks that bridge the gap between streetwear culture 
              and accessible luxury. Every design, every material choice, every detail is intentional.
            </p>
            <p>
              Today, KickNcaps represents more than just a brand, it's a community of individuals who value quality, 
              authenticity, and self-expression.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="mb-6 text-lg text-gray-300">Ready to elevate your style?</p>
          <Link 
            to="/shop" 
            className="inline-block px-8 py-4 text-lg font-semibold btn-primary"
          >
            Shop Our Collection
          </Link>
        </div>
      </div>
    </section>
  );
}