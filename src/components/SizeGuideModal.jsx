import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SizeGuideModal({ open, onClose }) {
  if (!open) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          onClick={(e) => e.stopPropagation()}
          className="bg-[#0b1120] text-white p-6 rounded-2xl max-w-md w-full"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
        >
          <h3 className="mb-4 text-xl font-bold">Cap Size Guide</h3>

          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="text-gray-400">
                <th className="py-2 text-left">Size</th>
                <th>CM</th>
                <th>Inches</th>
                <th>US</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["S", 55, 21.65, "6 7/8"],
                ["M", 57, 22.44, "7 1/8"],
                ["L", 59, 23.23, "7 3/8"],
                ["XL", 61, 24.02, "7 5/8"],
                ["XXL", 63, 24.8, "7 7/8"],
              ].map((s) => (
                <tr key={s[0]} className="border-t border-white/10">
                  <td className="py-2">{s[0]}</td>
                  <td>{s[1]}</td>
                  <td>{s[2]}</td>
                  <td>{s[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <button
            onClick={onClose}
            className="w-full py-2 mt-6 font-medium text-black bg-white rounded-xl"
          >
            Close
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
