// src/App.jsx
import React, { useState } from "react";

import Navbar from "./components/Navbar";
import HeroSlider from "./components/HeroSlider";
import EnquiryForm from "./components/StickyFooter";
import Residences from "./components/Residences";
import PrivateResidences from "./components/PrivateResidences";
import Feature1 from "./components/Feature1";
import Feature2 from "./components/Feature2";
import Feature3 from "./components/Feature3";
import VideoCarousel from "./components/VideoCarousel ";
import AnIconInMaking from "./components/AnIconInMaking";
import ImageCarousel from "./components/ImageCarousel";
import LocationMap from "./components/LocationMap";
import EnquiryForm2 from "./components/EnquiryForm2";
import About from "./components/About";
import Footer from "./components/Footer";
import AmenitiesCarousel from "./components/AmenitiesCarousel";
import StickyFooter from "./components/StickyFooter";
import EnquireNowModal from "./components/EnquireNowModal"; // Import the modal component
import WhatsAppButton from "./components/WhatsAppButton";


export default function App() {
   const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="w-full">
<Navbar openModal={openModal}  /> 
   <HeroSlider />
      <Residences/>
      <PrivateResidences/>
      <Feature1 openModal={openModal} />            
      <Feature2 openModal={openModal} />
      <Feature3 openModal={openModal} />
      <VideoCarousel/> 
      <AnIconInMaking/>
      <AmenitiesCarousel/>
      <ImageCarousel/>
      <LocationMap/>
      <EnquiryForm2/>
      <About/>
      <Footer/>
      <WhatsAppButton/>
      <StickyFooter openModal={openModal} />
            <EnquireNowModal isOpen={isModalOpen} onClose={closeModal} />

      
    </div>
  );
}
