import React, { useEffect, useState } from "react";
import Hero from '../components/Hero'

function Careers() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div>
      <Hero
        backgroundImage="../../public/image/careere.jpg"
        overlayColor="#081D30"
        overlayOpacity={0.7}
        headingText="Ethics and empathy make perfect catalyst for success."
        lineColor="#00ADB1"
      />
       {/* Back to Top Button */}
      {showButton && (
       <button
  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
  className="w-12 h-12 fixed bottom-6 right-6 z-50 bg-[#00ADB1] text-white rounded-full shadow-lg hover:bg-[#F16624] transition-all duration-300 animate-bounce flex items-center justify-center"
  aria-label="Back to Top"
>
  ↑
</button>

      )}
    </div>
  )
}

export default Careers
