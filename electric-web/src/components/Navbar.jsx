import { useState } from "react";
import { Linkedin, Facebook, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="bg-[#04182B] text-white w-full">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Left - Logo and Tagline */}
        <div className="flex items-center gap-6">
          <div className="text-4xl font-bold flex items-center">
            <span className="text-[#1DB7B2]">S</span>
            <span className="text-[#1DB7B2]">T</span>
            <span className="text-orange-500">E</span>
            <span className="text-[#1DB7B2]">D</span>
          </div>
          <div className="hidden md:flex flex-col leading-5 text-sm">
            <span>MEP Engineering & Specialized</span>
            <span>Services</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 items-center text-sm font-medium">
          {navItems.map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              className={`hover:text-orange-500 ${
                name === "Home" ? "text-orange-500" : ""
              }`}
            >
              {name}
            </Link>
          ))}
          <div className="flex gap-2 ml-4">
            <a
              href="https://linkedin.com"
              className="bg-[#1DB7B2] p-1.5 rounded-full"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={18} className="text-[#04182B]" />
            </a>
            <a
              href="https://facebook.com"
              className="bg-[#1DB7B2] p-1.5 rounded-full"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook size={18} className="text-[#04182B]" />
            </a>
          </div>
        </nav>

        {/* Mobile Menu Icon */}
        <button onClick={toggleMenu} className="md:hidden text-white">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#04182B] px-4 pb-4 space-y-3 text-sm font-medium">
          {navItems.map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              className={`block ${
                name === "Home" ? "text-orange-500" : "text-white"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {name}
            </Link>
          ))}
          <div className="flex gap-2 mt-2">
            <a
              href="https://linkedin.com"
              className="bg-[#1DB7B2] p-1.5 rounded-full"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={18} className="text-[#04182B]" />
            </a>
            <a
              href="https://facebook.com"
              className="bg-[#1DB7B2] p-1.5 rounded-full"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook size={18} className="text-[#04182B]" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
