import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "People First",
  },
  {
    question: "Continuous Progress",
  },
  {
    question: "Purpose",
  },
  {
    question: "Efficiency",
  },
  {
    question: "Autonomy",
  },
  {
    question: "Quality",
  },
  {
    question: "Listening",
  },
  {
    question: "Futurism",
  }
];

const Faq2 = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      {/* FAQ Section */}
      <div className="bg-[#081D30] text-white py-16 px-6">
        {/* Top 3 dots */}
        <div className="flex justify-center gap-6 mb-8">
          <div className="w-6 h-6 rounded-full bg-[#00ADB1]" />
          <div className="w-6 h-6 rounded-full bg-[#00ADB1]" />
          <div className="w-6 h-6 rounded-full bg-[#00ADB1]" />
        </div>

        {/* Heading */}
        <h2 className="text-xl font-semibold text-center mb-2">
          Standards and principles nurture success
        </h2>

        {/* Underline */}
        <div className="w-94 h-[2px] bg-[#F16624] mx-auto mb-10" />

        {/* Content Grid */}
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10">
          {/* Left Image */}
          <div className="w-full md:w-1/2">
            <img
              src="../../public/image/tower.jpg"
              alt="FAQ"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Right FAQ List */}
          <div className="w-full md:w-1/2 space-y-2">
            {faqs.map((faq, index) => (
              <div key={index}>
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

                {/* Answer Section */}
                <div
                  className={`transition-all duration-300 ease-in-out px-4 overflow-hidden ${
                    openIndex === index ? "max-h-40 py-2" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq2;
