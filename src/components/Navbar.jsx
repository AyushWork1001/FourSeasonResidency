// src/components/Navbar.jsx
import { useState } from "react";
import { X, Menu } from "lucide-react"; // for icons

export default function Navbar({ openModal }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black text-white z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 lg:py-4">
        
        {/* Logo */}
        <div className=" alert-horizontal flex items-center">
          <img
            src="/logo.png" // replace with your logo path
            alt="Four Seasons"
            className="h-12"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-8 text-lg">
          <a href="#home" className="text-[1rem] font-jeles">Home</a>
          <a href="#residences" className="text-[1rem] font-jeles">Residences</a>
          <a href="#amenities" className="text-[1rem] font-jeles">Amenities</a>
          <a href="#gallery" className="text-[1rem] font-serif">Gallery</a>
          <a href="#location" className="text-[1rem] font-jeles">Location</a>
        </div>

        {/* Desktop Right Section */}
        <div className="hidden lg:flex items-center space-x-6">
          <a className="text-md font-sans" href="tel:+917045946449">+91 70459 46449</a>
          <button 
                    onClick={openModal}

          className="bg-[#474747] font-sans cursor-pointer px-5 py-2.5 rounded-full text-md">
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
