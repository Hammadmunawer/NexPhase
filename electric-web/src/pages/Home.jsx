import React, { useEffect, useState } from "react";
import Faq from "../components/Faq";
import ContactForm from "../components/ContactForm";
import White from "../components/White";
import SmallHero from "../components/SmallHero";
import Faq2 from "../components/Faq2";
import Companycase2 from "../components/Companycase2";
import { useNavigate } from "react-router-dom";


const Home = () => {
  const [showButton, setShowButton] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full">
      {/* Background Video with Overlay and Centered Content */}
      <div className="relative h-[100vh] overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src="../../public/image/bg1.mp4"
          autoPlay
          loop
          muted
          playsInline
        ></video>

        <div className="absolute top-0 left-0 w-full h-full bg-[rgba(8,29,48,0.7)] z-10"></div>

        <div className="relative z-20 flex items-center justify-center w-full h-full px-10">
          <div className="text-white max-w-md mr-8">
            <p className="mt-4 text-lg text-white">
              STED, a story of precision and determination
            </p>
          </div>
          <div className="flex flex-col gap-0 relative">
            <div className="w-52 h-[2px] bg-[#00ADB1] rotate-[-30deg] origin-left absolute top-0 mt-15 left-0" />
            <div className="w-64 h-[2px] bg-[#00ADB1] rotate-[-30deg] origin-left mt-20" />
          </div>
        </div>
      </div>

      {/* Exclusive Message Section */}
      <div className="bg-[#081D30] text-white py-16 px-4 text-center">
        <div className="flex justify-center gap-6 mb-8">
          <div className="w-6 h-6 rounded-full bg-[#00ADB1]" />
          <div className="w-6 h-6 rounded-full bg-[#00ADB1]" />
          <div className="w-6 h-6 rounded-full bg-[#00ADB1]" />
        </div>
        <h2 className="text-3xl font-semibold mb-2">
          Leading the Curve in <br /> Engineering Excellence
        </h2>
        <div className="w-94 h-[2px] bg-[#F16624] mx-auto mb-8" />
        <p className="max-w-3xl mx-auto text-lg leading-8 break-all">
          In a global era of escalating environment, social and governance
          policies; and in the decade of action on SDGs and climate change, as
          investors and development project owners at both government and
          private ends, you are keen on delivering the hundred percent of your
          conventional construction needs to focus more on advancing your
          building management system, premises performance and stakeholders’
          reward.
        </p>
        <div className="mt-10 flex justify-center">
        <button
  onClick={() => navigate("/services")}
  className="px-6 py-2 text-white border-2 border-[#00ADB1] rounded transition-transform duration-300 hover:text-[#F16624] hover:scale-105 active:scale-200"
>
  View Services
</button>

        </div>
      </div>

      {/* White Section */}
    <div className="bg-white text-black px-6 py-48">
  {/* Colored Dots */}
  <div className="flex justify-center gap-6 mb-8">
    <div className="w-6 h-6 rounded-full bg-[#00ADB1]" />
    <div className="w-6 h-6 rounded-full bg-[#00ADB1]" />
    <div className="w-6 h-6 rounded-full bg-[#00ADB1]" />
  </div>

  {/* Heading */}
  <h2 className="text-3xl font-semibold text-center mb-2">
    Trusted by the Kingdom's Prominent <br /> Projects
  </h2>
  <div className="w-[296px] h-[2px] bg-[#F16624] mx-auto mb-10" />

  {/* Cards */}
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-20">
    {[1, 2].map((_, index) => (
      <div
        key={index}
        className="relative h-[50vh] group bg-[#081D30] rounded-xl shadow-lg pt-24 pb-6 px-4 overflow-hidden"
      >
        {/* Image Side (Front) */}
        <div className="absolute inset-0 flex flex-col items-center transition-all duration-500 ease-in-out group-hover:opacity-0 group-hover:scale-90">
          <img
            src={`/image/img${index + 1}.${index === 0 ? "png" : "jpg"}`}
            alt={`Project ${index + 1}`}
            className="w-[90%] h-[300px] object-cover rounded-md absolute top-[-30px] left-1/2 transform -translate-x-1/2 shadow-xl z-10"
          />
          <div className="text-white text-center text-sm mt-[270px] z-20">
            {index === 0 ? (
              <>
                <p className="font-medium mt-4">
                  King Abdul Aziz Center for World Culture
                </p>
                <p>Dahran | Saudi Arabia</p>
              </>
            ) : (
              <>
                <p className="font-medium mt-4">Riyadh Metro Station</p>
                <p>Riyadh | Saudi Arabia</p>
              </>
            )}
          </div>
        </div>

        {/* Back Side (On Hover) */}
        <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30">
          <p className="text-white text-sm mb-2 tracking-widest uppercase">
            Delivered
          </p>
         <button
                onClick={() => navigate("/projects")}
                className="px-6 py-2 border-2 border-white text-white hover:text-[#F16624] transition-all duration-300"
              >
                See Other Projects
              </button>
        </div>
      </div>
    ))}
  </div>
</div>



      {/* Business Highlights */}
      <div className="bg-[#081D30] text-white py-16 px-6">
        <div className="flex justify-center gap-6 mb-8">
          <div className="w-6 h-6 rounded-full bg-[#00ADB1]" />
          <div className="w-6 h-6 rounded-full bg-[#00ADB1]" />
          <div className="w-6 h-6 rounded-full bg-[#00ADB1]" />
        </div>
        <h2 className="text-3xl font-semibold text-center mb-2">
          Business Highlights
        </h2>
        <div className="w-74 h-[2px] bg-[#F16624] mx-auto mb-10" />
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-10">
          <div className="w-full md:w-1/2">
            <img
              src="../../public/image/machine.jpg"
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

      {/* FAQ and Contact Form */}
      <White />
      <SmallHero />
      <Faq />
      <Faq2 />
      <Companycase2 />
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

export default Home;
