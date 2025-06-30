import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/image/10.png",
  "/image/11.png",
  "/image/12.png",
  "/image/13.png",
  "/image/14.png",
  "/image/15.png",
  "/image/16.png",
  "/image/17.png",
  "/image/18.png",
];

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div
      className="py-16 px-4 text-center"
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Top Dots */}
      <div className="flex justify-center gap-3 mb-6">
        <div className="w-4 h-4 bg-[#00ADB1] rounded-full" />
        <div className="w-4 h-4 bg-[#00ADB1] rounded-full" />
        <div className="w-4 h-4 bg-[#00ADB1] rounded-full" />
      </div>

      {/* Heading */}
      <h2 className="text-3xl font-medium text-[#04182B] mb-1">Gallery</h2>
      <div className="w-48 h-[1px] bg-[#F16624] mx-auto mb-8" />

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Gallery ${index + 1}`}
            className="cursor-pointer rounded-md object-cover w-full h-60 hover:opacity-90 transition"
            onClick={() => setSelectedImage(img)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          />
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white text-3xl font-bold z-50 hover:text-red-400"
            >
              &times;
            </button>

            {/* Image with zoom animation */}
            <img
              src={selectedImage}
              alt="Selected"
              className="max-w-[90%] max-h-[80%] rounded-lg shadow-lg"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.4 }}
            />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
