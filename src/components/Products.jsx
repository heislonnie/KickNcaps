import React, { useState } from "react";
import Modal from "react-modal";
import PayButton from "./PayButton";
import allbeanie from "../assets/allbeanie.png";
import redcap from "../assets/redcap.png";
import camo from "../assets/camo.png";

// Modal requires the app element for accessibility.
Modal.setAppElement("#root");

export default function Products() {
  // Small in-file product list used by this demo page.
  const productList = [
    { id: 1, name: "Beanie", price: 35, img: allbeanie },
    { id: 2, name: "Street Red", price: 40, img: redcap },
    { id: 3, name: "Urban Camo", price: 200, img: camo },
  ];

  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
      {productList.map((item) => (
        <div
          key={item.id}
          className="overflow-hidden transition transform bg-white shadow-lg rounded-xl hover:scale-105"
        >
          <img
            src={item.img}
            alt={item.name}
            className="object-cover w-full h-64"
          />
          <div className="p-4">
            <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
            <p className="mb-4 text-gray-600">${item.price}</p>
            <button
              className="w-full bg-[#111827] text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
              onClick={() => setSelectedItem(item)}
            >
              Buy Now
            </button>
          </div>
        </div>
      ))}

      {selectedItem && (
        <Modal
          isOpen={!!selectedItem}
          onRequestClose={() => setSelectedItem(null)}
          className="max-w-md p-6 mx-auto mt-20 bg-white shadow-xl rounded-xl"
        >
          <h2 className="mb-4 text-2xl font-bold">{selectedItem.name}</h2>
          <img
            src={selectedItem.img}
            alt={selectedItem.name}
            className="object-cover w-full h-64 mb-4 rounded"
          />
          <p className="mb-4 text-lg font-semibold">${selectedItem.price}</p>

          <PayButton amount={selectedItem.price} name={selectedItem.name} />

          {/*
            NOTE: the original close button had unconventional utility classes
            (e.g. `mt-400` and `hover:bg-gray-3`). We keep them as-is to preserve
            the exact UI but mark this as an actionable TODO for future cleanup.
          */}
          <button
            onClick={() => setSelectedItem(null)}
            className="px-4 py-2 transition bg-gray-200 rounded-lg mt-400 hover:bg-gray-3"
          >
            Close
          </button>
        </Modal>
      )}
    </div>
  );
}
