import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  { question: "People First" },
  { question: "Continuous Progress" },
  { question: "Purpose" },
  { question: "Efficiency" },
  { question: "Autonomy" },
  { question: "Quality" },
  { question: "Listening" },
  { question: "Futurism" },
];

const Faq2 = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <motion.div
      className="bg-[#081D30] text-white py-16 px-6"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Dots */}
      <div className="flex justify-center gap-6 mb-8">
        {[1, 2, 3].map((_, i) => (
          <div key={i} className="w-6 h-6 rounded-full bg-[#00ADB1]" />
        ))}
      </div>

      {/* Heading */}
      <motion.h2
        className="text-xl font-semibold text-center mb-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Standards and principles nurture success
      </motion.h2>

      {/* Underline */}
      <motion.div
        className="w-94 h-[2px] bg-[#F16624] mx-auto mb-10"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.5 }}
        style={{ transformOrigin: "left" }}
      />

      {/* Grid */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10">
        {/* Image */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src="../../public/image/tower.jpg"
            alt="FAQ"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          className="w-full md:w-1/2 space-y-2"
          initial="hidden"
          animate="visible"
        >
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-700">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-4 py-2 flex items-center justify-between focus:outline-none"
              >
                <div className="flex items-center gap-2">
                  {openIndex === index ? (
                    <ChevronUp className="w-4 h-4 text-[#F16624]" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-[#00ADB1]" />
                  )}
                  <span className="font-medium">{faq.question}</span>
                </div>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key="faq"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-4 pb-2 overflow-hidden"
                  >
                    <p className="text-gray-300 text-sm">
                      This is a placeholder answer. You can update it later with real content.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Faq2;
