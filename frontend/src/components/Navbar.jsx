// src/components/Navbar.jsx
import { useState } from "react";
import { X, Menu } from "lucide-react"; // for icons

export default function Navbar({ openModal }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black text-white z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 lg:py-4">
        
        {/* Logo Text */}
        <div className="flex items-start">
          <span className="text-2xl md:text-3xl font-bold tracking-wide font-serif text-white">
            Modern <span className="text-[#FFD700]">Heights</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-9 text-lg">
          <a href="#home" className="text-[1rem] font-jeles hover:text-[#FFD700]">Home</a>
          <a href="#residences" className="text-[1rem] font-jeles hover:text-[#FFD700]">Residences</a>
          <a href="#amenities" className="text-[1rem] font-jeles hover:text-[#FFD700]">Amenities</a>
          <a href="#gallery" className="text-[1rem] font-jeles hover:text-[#FFD700]">Gallery</a>
          <a href="#location" className="text-[1rem] font-jeles hover:text-[#FFD700]">Location</a>
        </div>

        {/* Desktop Right Section */}
        <div className="hidden lg:flex items-center space-x-6">
          <a className="text-md font-sans hover:text-[#FFD700]" href="tel:+919876543210">
            +91 98765 43210 
          </a>
          <button 
            onClick={openModal}
            className="bg-[#474747] hover:bg-[#FFD700] hover:text-black transition-colors font-sans cursor-pointer px-5 py-2.5 rounded-full text-md"
          >
            Enquire Now
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(true)}>
            <Menu size={28} />
          </button>
        </div>
      </div>

      {/* Mobile Fullscreen Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-black flex flex-col items-center justify-center space-y-8 text-2xl z-50">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-5 right-5"
          >
            <X size={40} />
          </button>
          <a href="#home" className="text-xl font-jeles" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#residences" className="text-xl font-jeles" onClick={() => setIsOpen(false)}>Residences</a>
          <a href="#amenities" className="text-xl font-jeles" onClick={() => setIsOpen(false)}>Amenities</a>
          <a href="#gallery" className="text-xl font-jeles" onClick={() => setIsOpen(false)}>Gallery</a>
          <a href="#location" className="text-xl font-jeles" onClick={() => setIsOpen(false)}>Location</a>
        </div>
      )}
    </nav>
  );
}
