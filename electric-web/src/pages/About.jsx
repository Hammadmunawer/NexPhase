import React, { useEffect, useState } from "react";
import Faq from "../components/Faq";
import Companycase from "../components/Componycase";
import ContactForm from "../components/ContactForm";
import Hero from "../components/Hero";
import Section from "../components/Section";

const About = () => {
  const [showButton, setShowButton] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        setShowButton(window.scrollY > 300);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  return (
    <div className="w-full">
      {/* Hero Section */}
      <Hero
        backgroundImage="../../public/image/about.jpg"
        overlayColor="#081D30"
        overlayOpacity={0.7}
        headingText="Innovation Meets Precision at STED"
        lineColor="#00ADB1"
      />

      {/* Exclusive Message Section */}
      <div className="bg-[#081D30] text-white py-16 px-4 text-center">
        <div className="flex justify-center gap-6 mb-8">
          <div className="w-6 h-6 rounded-full bg-[#00ADB1]" />
          <div className="w-6 h-6 rounded-full bg-[#00ADB1]" />
          <div className="w-6 h-6 rounded-full bg-[#00ADB1]" />
        </div>
        <h2 className="text-3xl font-semibold mb-2">Exclusive Message</h2>
        <div className="w-74 h-[2px] bg-[#F16624] mx-auto mb-8" />
        <p className="max-w-3xl mx-auto text-lg leading-8">
          At our company, we strive to bring the best of creativity, innovation, and dedication to each and every client. Our commitment to excellence is unmatched, and we believe in delivering more than what’s expected. This is not just business, it’s a promise to always stay ahead.
        </p>
      </div>

      {/* White Section */}
      <div className="bg-white text-black py-16 px-6">
        <div className="flex justify-center gap-6 mb-8">
          <div className="w-6 h-6 rounded-full bg-[#00ADB1]" />
          <div className="w-6 h-6 rounded-full bg-[#00ADB1]" />
          <div className="w-6 h-6 rounded-full bg-[#00ADB1]" />
        </div>
        <h2 className="text-3xl font-semibold text-center mb-2">Business Overview</h2>
        <div className="w-74 h-[2px] bg-[#F16624] mx-auto mb-10" />
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2">
            <img
              src="/image/handimage.jpg"
              alt="About"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2 text-lg leading-8">
            <p>
              Our story is rooted in a deep passion for excellence and vision. With every step, we strive to redefine possibilities and push boundaries. The journey has not just been about achieving milestones but about creating a legacy of innovation, integrity, and impact.
            </p>
          </div>
        </div>
      </div>

      {/* Business Highlights */}
      <div className="bg-[#081D30] text-white py-16 px-6">
        <div className="flex justify-center gap-6 mb-8">
          <div className="w-6 h-6 rounded-full bg-[#00ADB1]" />
          <div className="w-6 h-6 rounded-full bg-[#00ADB1]" />
          <div className="w-6 h-6 rounded-full bg-[#00ADB1]" />
        </div>

        <h2 className="text-3xl font-semibold text-center mb-2">Business Highlights</h2>
        <div className="w-74 h-[2px] bg-[#F16624] mx-auto mb-10" />

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-10">
          <div className="w-full md:w-1/2">
            <img
              src="/image/machine.jpg"
              alt="Vision"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-6 text-lg leading-7">
            {[
              "We aim for excellence in every project we undertake.",
              "Our strategies are built around innovation and reliability.",
              "Customer satisfaction is at the core of our mission.",
              "We prioritize sustainability and responsibility.",
              "Our teams collaborate with transparency and trust.",
              "We invest in future-driven technologies.",
              "Every solution is customized to client needs.",
              "We believe in long-term partnerships, not transactions.",
              "Our growth is aligned with your success.",
            ].map((text, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-3 h-3 mt-2 rounded-full bg-[#00ADB1]" />
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Faq />
      <Section/>
      <Companycase />
      <ContactForm />

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
  );
};

export default About;
