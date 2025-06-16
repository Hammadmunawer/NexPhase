import React from "react";

const SmallHero = ({
  backgroundImage = "../../public/image/water.jpg",
  buttonText = "Learn More",
  onButtonClick = () => {},
}) => {
  return (
    <div
      className="w-full h-[60vh] bg-cover bg-center relative flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay (optional) */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
<div className="text-4xl font-bold flex items-center text-centre px-60">
            <span className="text-[#1DB7B2]">S</span>
            <span className="text-[#1DB7B2]">T</span>
            <span className="text-orange-500">E</span>
            <span className="text-[#1DB7B2]">D</span>
          </div>
        <p className="text-lg md:text-xl mb-6">Committed to Climate Action, encouraging SDG and ESG Practices.
</p>
        <button
          onClick={onButtonClick}
          className="px-6 py-2 border-2 border-[#00ADB1] rounded transition-transform duration-300 hover:text-[#F16624] hover:scale-105 active:scale-200 font-medium"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default SmallHero;
