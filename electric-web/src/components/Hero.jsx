import React from "react";

const Hero = ({
  backgroundImage = "/image/about.jpg",
  overlayColor = "#081D30",
  overlayOpacity = 0.6,
  headingText = "STED, a story of precision and determination",
  lineColor = "#00ADB1",
}) => {
  // Convert HEX to RGBA
  const hexToRgba = (hex, opacity) => {
    const bigint = parseInt(hex.replace("#", ""), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  };

  return (
    <div
      className="relative h-[100vh] bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay */}
      <div
        className="absolute top-0 left-0 w-full h-full z-0"
        style={{ backgroundColor: hexToRgba(overlayColor, overlayOpacity) }}
      ></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center w-full px-10">
        <div className="text-white max-w-md mr-8">
          <p className="mt-4 text-lg">{headingText}</p>
        </div>

        <div className="flex flex-col gap-0 relative">
          <div
            className="w-52 h-[2px] rotate-[-30deg] origin-left absolute top-0 mt-15 left-0"
            style={{ backgroundColor: lineColor }}
          />
          <div
            className="w-64 h-[2px] rotate-[-30deg] origin-left mt-20"
            style={{ backgroundColor: lineColor }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
