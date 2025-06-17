import React, { useEffect, useState } from "react";
import Hero from '../components/Hero'
import DeliveredProjects from '../components/DeliveredProjects'
import Gallery from '../components/Gallery'
import ContactForm from "../components/ContactForm";

function Projects() {
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
        backgroundImage="../../public/image/projects.jpg"
        overlayColor="#081D30"
        overlayOpacity={0.7}
        headingText="Trusted by the Kingdom's Most Prominent Projects"
        lineColor="#00ADB1"
      />
      <DeliveredProjects/>
      <Gallery/>
       <div className="flex justify-center gap-6 mb-8">
        <div className="w-6 h-6 rounded-full bg-[#00ADB1]" />
        <div className="w-6 h-6 rounded-full bg-[#00ADB1]" />
        <div className="w-6 h-6 rounded-full bg-[#00ADB1]" />
      </div>

      {/* Heading */}
      <h2 className="text-xl font-semibold text-center mb-2">
Let's get in touch, please <br /> fill this quick form!
      </h2>

      {/* Underline */}
      <div className="w-74 h-[2px] bg-[#F16624] mx-auto mb-10" />
       <ContactForm/>
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

export default Projects
