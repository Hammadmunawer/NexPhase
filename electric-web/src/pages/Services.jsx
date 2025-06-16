import React, { useEffect, useState } from "react";
import Hero from '../components/Hero'
import Testing from '../components/Testing'
import ContactForm from "../components/ContactForm"
// import { Construction } from 'lucide-react'


function Services() {
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
        backgroundImage="../../public/image/service.jpg"
        overlayColor="#081D30"
        overlayOpacity={0.7}
        headingText="Fulfillment is qualification, learning and commitment combined."
        lineColor="#00ADB1"
      />
       <Testing
      heading="Testing & Commissioning Management"
      imageSrc="/image/test.png"
      paragraphs={[
        "Referring to the diversity in the project needs, the commissioning process takes a critical path to assure that all systems and components of a building are designed, installed, tested, operated, and maintained according to the operational requirements of the owner or final client.",
        "In practice, the commissioning process comprises the integrated application of a set of engineering techniques and procedures to check, inspect and test every operational requirement of the project, from individual functions, such as instruments and equipment, up to complex amalgamations of modules, subsystems and systems.",
      ]}
    />
      <Testing
      heading="Construction Management"
      imageSrc="/image/1.png"
      paragraphs={[
        "Referring to the diversity in the project needs, the commissioning process takes a critical path to assure that all systems and components of a building are designed, installed, tested, operated, and maintained according to the operational requirements of the owner or final client.",
        "In practice, the commissioning process comprises the integrated application of a set of engineering techniques and procedures to check, inspect and test every operational requirement of the project, from individual functions, such as instruments and equipment, up to complex amalgamations of modules, subsystems and systems.",
      ]}
    />
     <Testing
      heading="Specialized Hands-on Tests"
      imageSrc="/image/2.png"
      paragraphs={[
        "Referring to the diversity in the project needs, the commissioning process takes a critical path to assure that all systems and components of a building are designed, installed, tested, operated, and maintained according to the operational requirements of the owner or final client.",
        "In practice, the commissioning process comprises the integrated application of a set of engineering techniques and procedures to check, inspect and test every operational requirement of the project, from individual functions, such as instruments and equipment, up to complex amalgamations of modules, subsystems and systems.",
      ]}
    />
     <Testing
      heading="Building Performance Evaluation"
      imageSrc="/image/3.png"
      paragraphs={[
        "Referring to the diversity in the project needs, the commissioning process takes a critical path to assure that all systems and components of a building are designed, installed, tested, operated, and maintained according to the operational requirements of the owner or final client.",
        "In practice, the commissioning process comprises the integrated application of a set of engineering techniques and procedures to check, inspect and test every operational requirement of the project, from individual functions, such as instruments and equipment, up to complex amalgamations of modules, subsystems and systems.",
      ]}
    />
     <Testing
      heading="QA/QC Management & Inspection"
      imageSrc="/image/4.png"
      paragraphs={[
        "Referring to the diversity in the project needs, the commissioning process takes a critical path to assure that all systems and components of a building are designed, installed, tested, operated, and maintained according to the operational requirements of the owner or final client.",
        "In practice, the commissioning process comprises the integrated application of a set of engineering techniques and procedures to check, inspect and test every operational requirement of the project, from individual functions, such as instruments and equipment, up to complex amalgamations of modules, subsystems and systems.",
      ]}
    />
     <Testing
      heading="Handover Management"
      imageSrc="/image/5.png"
      paragraphs={[
        "Referring to the diversity in the project needs, the commissioning process takes a critical path to assure that all systems and components of a building are designed, installed, tested, operated, and maintained according to the operational requirements of the owner or final client.",
        "In practice, the commissioning process comprises the integrated application of a set of engineering techniques and procedures to check, inspect and test every operational requirement of the project, from individual functions, such as instruments and equipment, up to complex amalgamations of modules, subsystems and systems.",
      ]}
    />
     <Testing
      heading="Facility Management Support"
      imageSrc="/image/6.png"
      paragraphs={[
        "Referring to the diversity in the project needs, the commissioning process takes a critical path to assure that all systems and components of a building are designed, installed, tested, operated, and maintained according to the operational requirements of the owner or final client.",
        "In practice, the commissioning process comprises the integrated application of a set of engineering techniques and procedures to check, inspect and test every operational requirement of the project, from individual functions, such as instruments and equipment, up to complex amalgamations of modules, subsystems and systems.",
      ]}
    />
    <div>
      
    </div>
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

export default Services
